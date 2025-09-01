# Compliance Quick-Guide

Fast orientation for teams. This is a practical starting point, not legal advice.

## EU AI Act (2025) — quick map
1) **Classify the use case**
   - Prohibited / High-risk / Limited-risk / Minimal-risk
2) **If High-risk, you need (provider/deployer):**
   - Risk management system + documented controls
   - Data governance (quality, bias checks, provenance)
   - Technical documentation + logs
   - Transparency + human oversight
   - Accuracy/robustness/cybersecurity targets
   - Post-market monitoring + incident reporting

**Release checks**
- Role identified? **Provider** (builds) vs **Deployer** (uses)
- DPIA needed? (if personal data or significant impact)
- User disclosures prepared (capabilities, limits)
- Contact channel for incidents

## ISO/IEC 42001 — AIMS essentials
- Scope & policy approved; roles/owners named
- Risk process for data/model/operations
- Lifecycle controls: design → data → train → eval → deploy → monitor → retire
- Supplier/third-party controls (models, data, tools)
- Incident mgmt + continuous improvement loop

**Evidence to keep**
- Risk register, change log
- Training/eval configs (seed, code, deps)
- Model card + data sheet
- Monitoring dashboards + incident tickets

## NIST AI RMF — 4 functions
- **Govern:** policies, accountability, documentation
- **Map:** context, harms/benefits, stakeholders
- **Measure:** metrics for performance, fairness, robustness, security, privacy
- **Manage:** mitigations, rollbacks, ongoing monitoring

## GAS Streams — where it lives
- **GAPS:** product/service standards & templates
- **GACS:** compliance controls & audits
- **GABS:** assistant behavior standards
- **GABS (Enterprise):** audit packs & consultation deliverables

> Tip: store all artifacts per release in a single folder (risk log, eval results, model card, DPIA, monitoring export).
