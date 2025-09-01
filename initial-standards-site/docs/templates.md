# Templates & Checklists

Use these as starting points. Copy the section you need into your project docs.

---

## Release Checklist
- [ ] Problem statement + success criteria written
- [ ] Roles identified (**Provider**/**Deployer**)
- [ ] Data sources listed with licenses & consent
- [ ] Risk register entry created (link below)
- [ ] Reproducible training config (seed, deps) committed
- [ ] Evaluation run recorded (metrics + error notes)
- [ ] Model card drafted
- [ ] Compliance checks: EU AI Act / ISO 42001 / NIST RMF
- [ ] Rollback plan & monitoring in place
- [ ] Sign-off recorded (date, approver)

---

## Model Card (fill-in)
**Model name:**  
**Version / date:**  
**Owners:**  
**Intended use:**  
**Out-of-scope / limitations:**  
**Training data summary:**  
**Eval metrics & datasets:**  
**Known risks & mitigations:**  
**Monitoring plan:**  
**Contact for issues:**  

---

## Data Sheet (dataset)
**Dataset name:**  
**Version / date:**  
**Provenance / licenses:**  
**Collection method & consent:**  
**Intended use / restrictions:**  
**Distributions / key segments:**  
**Quality checks:**  
**PII handling & retention:**  

---

## Risk Log — single entry template
| Date | Owner | Component | Scenario / Harm | Likelihood | Impact | Mitigation | Status |
|---|---|---|---|---|---|---|---|
| YYYY-MM-DD | name | model / data / ops | short description | Low/Med/High | Low/Med/High | action taken | Open/Closed |

---

## Evaluation Run Record
| Commit/Tag | Data slice | Metric(s) | Baseline | Result | Delta | Notes | Artifacts |
|---|---|---|---|---|---|---|---|
| abc123 | e.g., EN users, Q3 set | e.g., F1, BLEU, ACC | 0.78 | 0.82 | +0.04 | errors improved on X | link to report |

---

## Incident Report (post-release)
**Date/time:**  
**Reporter:**  
**What happened:**  
**User impact:**  
**Detection signal:**  
**Root cause:**  
**Mitigation / rollback:**  
**Follow-ups / owners / dates:**  

---

## GAS Streams mapping (tick what applies)
- [ ] **GAPS** — product/service standard updated
- [ ] **GACS** — control/audit evidence stored
- [ ] **GABS** — assistant behaviour change documented
- [ ] **GABS (Enterprise)** — client audit pack updated
