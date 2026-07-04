// scripts/inject-seo-to-jobs.mjs
// Aggiunge le professioni SEO a jobs.js (jobData + jobExtra)
// in modo che appaiano nel calcolatore e nella classifica.

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { seoProfessions } from './professions-seo-data.mjs';
import { seoProfessions2 } from './professions-seo-data-2.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const jobsPath = join(ROOT, 'public/jobs.js');

// ── Stipendio base per categoria ────────────────────────────────────────────
const SALARY_BY_CAT = {
  'Sanità':        { sal: 32000, extra: 9600 },
  'Educazione':    { sal: 24000, extra: 7200 },
  'Legale':        { sal: 38000, extra: 11400 },
  'Ingegneria':    { sal: 36000, extra: 10800 },
  'IT':            { sal: 38000, extra: 11400 },
  'Finanza':       { sal: 38000, extra: 11400 },
  'HR':            { sal: 32000, extra: 9600 },
  'Commerciale':   { sal: 30000, extra: 9000 },
  'Media':         { sal: 26000, extra: 7800 },
  'Artigianato':   { sal: 26000, extra: 7800 },
  'Ristorazione':  { sal: 22000, extra: 6600 },
  'Servizi':       { sal: 22000, extra: 6600 },
  'PA':            { sal: 28000, extra: 8400 },
  'Sport':         { sal: 22000, extra: 6600 },
  'Ricerca':       { sal: 34000, extra: 10200 },
  'Agricoltura':   { sal: 26000, extra: 7800 },
  'Ambiente':      { sal: 30000, extra: 9000 },
  'default':       { sal: 28000, extra: 8400 },
};

// ── Costo AI per livello di rischio ────────────────────────────────────────
function aiCost(risk) {
  if (risk >= 70) return { monthly: 250,  setup: 800  };
  if (risk >= 50) return { monthly: 450,  setup: 1500 };
  if (risk >= 30) return { monthly: 900,  setup: 2500 };
  return             { monthly: 1800, setup: 4000 };
}

// ── Converti slug in chiave JS (hyphens → underscores) ────────────────────
function toKey(slug) { return slug.replace(/-/g, '_'); }

// ── Leggi jobs.js ────────────────────────────────────────────────────────
let src = readFileSync(jobsPath, 'utf8');

// Trova le chiavi già esistenti in jobData
const existingKeys = new Set([...src.matchAll(/^\s{4,8}([a-z_]+):\s*\{/gm)].map(m => m[1]));

// ── Genera i nuovi entry ─────────────────────────────────────────────────
const allNew = [...seoProfessions, ...seoProfessions2];
let jobExtraEntries = '';
let jobDataEntries  = '';
let count = 0;

for (const p of allNew) {
  const key = toKey(p.slug);
  if (existingKeys.has(key)) continue;  // già presente

  const sal  = SALARY_BY_CAT[p.category] || SALARY_BY_CAT.default;
  const ai   = aiCost(p.risk);

  // jobExtra entry (tasks + survivalPlan)
  const tasksJs = (p.tasks || []).map(t =>
    `            { name: ${JSON.stringify(t.name)}, risk: ${t.risk} }`
  ).join(',\n');

  const survivalJs = (p.skills || []).map(s =>
    `            ${JSON.stringify(s)}`
  ).join(',\n');

  jobExtraEntries += `
    ${key}: {
        tasks: [
${tasksJs}
        ],
        survivalPlan: [
${survivalJs}
        ]
    },`;

  // jobData entry
  jobDataEntries += `
            ${key}: {
                title: ${JSON.stringify(p.title)},
                icon: ${JSON.stringify(p.icon || '💼')},
                humanAccuracy: ${(1 - p.risk / 200).toFixed(2)},
                aiAccuracy: ${(p.risk / 100 * 0.9 + 0.1).toFixed(2)},
                riskFactor: ${(p.risk / 100).toFixed(2)},
                targetYear: ${p.year},
                survivalNote: ${JSON.stringify(p.survivalNote || '')},
                defaultHumanSalary: ${sal.sal},
                defaultHumanExtra: ${sal.extra},
                defaultAiMonthly: ${ai.monthly},
                defaultAiSetup: ${ai.setup},
                description: ${JSON.stringify(p.description || '')}
            },`;

  count++;
}

// ── Inietta in jobExtra ──────────────────────────────────────────────────
// Trova la chiusura di export const jobExtra = { ... }
// Cerca il pattern: ultimo } prima di export const jobData
const jobExtraEnd = src.lastIndexOf('\n};', src.indexOf('export const jobData'));
if (jobExtraEnd === -1) { console.error('❌ jobExtra end not found'); process.exit(1); }

src = src.slice(0, jobExtraEnd) + ',\n' + jobExtraEntries + '\n' + src.slice(jobExtraEnd);

// ── Inietta in jobData ───────────────────────────────────────────────────
// Trova la chiusura finale di jobData: ultimo }; nel file
const jobDataEnd = src.lastIndexOf('\n};');
if (jobDataEnd === -1) { console.error('❌ jobData end not found'); process.exit(1); }

src = src.slice(0, jobDataEnd) + ',\n' + jobDataEntries + '\n' + src.slice(jobDataEnd);

writeFileSync(jobsPath, src, 'utf8');
console.log(`✅ Aggiunte ${count} nuove professioni a jobs.js`);
