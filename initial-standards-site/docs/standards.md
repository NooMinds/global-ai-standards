# Standards Overview

This page outlines GAS standards at a glance. Each section will later link to deeper pages and templates.

## Model Development (Must/Should/Could)
**Must**
- Written problem statement + success criteria
- Data consent/usage mapping (collection, purpose, retention, rights)
- Reproducible training pipeline (pinned deps, seed, config)
- Evaluation before release (task-appropriate metrics + error analysis)
- Human-in-the-loop for high-risk use

**Should**
- Baseline model for comparison
- Bias/robustness checks on key segments
- Model card with scope, limits, and monitoring plan

**Could**
- Structured ablation studies
- Red-team prompts/scenarios library

## Data Governance
**Must**
- Source provenance + licenses recorded
- Data minimisation & access controls
- PII handling per policy; deletion path verified
- Datasets versioned with hashes and changelogs

**Should**
- Data quality gates (missingness, drift, leakage)
- DLP scanning in CI

**Could**
- Synthetic data policy + watermarking

## MLOps & Release
**Must**
- CI checks: lint, tests, security scan
- Reproducible build artifact (model + config)
- Canary or staged rollout with rollback

**Should**
- Feature flags for model toggles
- Infra cost & latency budgets

**Could**
- Shadow deployments for comparison

## Evaluation & Monitoring
**Must**
- Pre-release eval suite stored with results
- Post-release monitoring: performance, drift, incidents
- Escalation runbook + rollback trigger rules

**Should**
- User feedback loop wired to triage
- Red-teaming refresh each quarter

**Could**
- Counterfactual & fairness dashboards

## Compliance Anchors
Map every change to:
- **EU AI Act (2025)**
- **ISO/IEC 42001**
- **NIST AI RMF**

## GAS Streams Mapping
- **GAPS:** product & service standards
- **GACS:** compliance controls & audits
- **GABS:** assistant behavior standards
- **GABS (Enterprise):** audit readiness, consultation deliverables
