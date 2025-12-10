const data = {
  workflows: [
    { name: 'Invoice Intake & Coding', owner: 'Finance Ops', status: 'success', sla: '98% on-time', runs: 1642 },
    { name: 'HR Ticket Classifier', owner: 'People Tech', status: 'warning', sla: '92% on-time', runs: 987 },
    { name: 'Access Request Provisioning', owner: 'IT Security', status: 'success', sla: '99.4% on-time', runs: 2456 },
    { name: 'Marketing Lead Enrichment', owner: 'Growth', status: 'success', sla: '97% on-time', runs: 1328 }
  ],
  runHistory: [
    { title: 'Invoice Intake & Coding', result: 'Success', duration: '2m 15s', time: 'Today, 09:14 AM' },
    { title: 'HR Ticket Classifier', result: 'Success', duration: '58s', time: 'Today, 08:50 AM' },
    { title: 'Access Request Provisioning', result: 'Failed: identity API', duration: '1m 05s', time: 'Yesterday, 5:12 PM' },
    { title: 'Marketing Lead Enrichment', result: 'Success', duration: '2m 44s', time: 'Yesterday, 11:07 AM' }
  ],
  onboarding: [
    { name: 'Discovery Intake', detail: 'Business case, success metrics, stakeholder map', badge: 'Week 1' },
    { name: 'Architecture Blueprint', detail: 'Connector inventory, secrets handling, guardrails', badge: 'Week 2' },
    { name: 'Control Testing', detail: 'Unit tests, audit logging, dry-run validation', badge: 'Week 3' },
    { name: 'Go-Live Readiness', detail: 'Runbook, SLO definitions, rollout checklist', badge: 'Week 4' }
  ],
  projects: [
    { name: 'Employee Onboarding Suite', detail: 'Phase: UAT | PM: L. Turner | Engineers: 3', badge: 'Target: Jan 15' },
    { name: 'Vendor Access Hardening', detail: 'Phase: Build | PM: A. Singh | Engineers: 2', badge: 'Target: Feb 02' },
    { name: 'Claims Classification v2', detail: 'Phase: Discovery | PM: J. Chen | Engineers: 4', badge: 'Target: Feb 28' }
  ],
  kpis: [
    { name: 'Successful Runs (24h)', value: '4,328', change: '+8.2%' },
    { name: 'Average SLA', value: '97.4%', change: '+0.6%' },
    { name: 'MTTR', value: '3.8 min', change: '-12%' },
    { name: 'Adoption', value: '68 active teams', change: '+4' },
    { name: 'Cost Savings (QTD)', value: '$1.2M', change: '+$85k' },
    { name: 'Time Saved (QTD)', value: '21,400 hrs', change: '+1,140' }
  ],
  adoption: [
    { user: 'S. Morgan', org: 'Finance Ops', runs: 842 },
    { user: 'K. Ahmed', org: 'IT Security', runs: 791 },
    { user: 'P. Diaz', org: 'Customer Care', runs: 650 },
    { user: 'L. Turner', org: 'People Tech', runs: 604 },
    { user: 'J. Chen', org: 'Claims', runs: 588 }
  ],
  value: [
    { automation: 'Invoice Intake & Coding', savings: '$220k', hours: '4,120', score: 'A+' },
    { automation: 'Access Request Provisioning', savings: '$180k', hours: '3,470', score: 'A' },
    { automation: 'HR Ticket Classifier', savings: '$125k', hours: '2,140', score: 'A-' },
    { automation: 'Customer Email Triage', savings: '$97k', hours: '1,680', score: 'B+' }
  ],
  upcoming: [
    { name: 'Runbooks 2.0', detail: 'Versioned runbooks with approval workflow and audit-ready exports', badge: 'Shipping: Feb' },
    { name: 'Connector Marketplace', detail: 'Curated connectors with hardening and reusability scores', badge: 'Shipping: Mar' },
    { name: 'Policy as Code', detail: 'Org-wide guardrails with drift detection and enforcement', badge: 'In Design' }
  ],
  feedback: [
    { name: 'SLA Budget Alerts', detail: 'Notify owners when error budgets burn too quickly', badge: '184 votes' },
    { name: 'Sandbox Environments', detail: 'Isolated sandboxes for partner testing', badge: '132 votes' },
    { name: 'Custom Scoring Models', detail: 'Allow teams to tune value realization scores', badge: '115 votes' }
  ]
};

function renderWorkflows() {
  const container = document.getElementById('workflow-list');
  container.innerHTML = '';
  data.workflows.forEach((wf) => {
    const div = document.createElement('div');
    div.className = 'workflow';
    div.innerHTML = `
      <div class="meta">
        <div class="status ${wf.status}"></div>
        <div>
          <strong>${wf.name}</strong>
          <p class="subtitle">Owner: ${wf.owner}</p>
        </div>
      </div>
      <div class="stats">
        <span>${wf.sla}</span>
        <span>Runs: ${wf.runs.toLocaleString()}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderHistory() {
  const container = document.getElementById('history-list');
  container.innerHTML = '';
  data.runHistory.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'history-item';
    const isFailure = item.result.toLowerCase().includes('failed');
    div.innerHTML = `
      <strong>${item.title}</strong>
      <p class="subtitle">${item.result} · ${item.duration} · ${item.time}</p>
      <span class="status ${isFailure ? 'danger' : 'success'}">${isFailure ? 'Attention' : 'Healthy'}</span>
    `;
    container.appendChild(div);
  });
}

function renderList(id, records) {
  const container = document.getElementById(id);
  container.innerHTML = '';
  records.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'list-item';
    div.innerHTML = `
      <div class="meta">
        <strong>${item.name}</strong>
        <p class="subtitle">${item.detail}</p>
      </div>
      <div class="badge">${item.badge}</div>
    `;
    container.appendChild(div);
  });
}

function renderKpis() {
  const container = document.getElementById('kpi-cards');
  container.innerHTML = '';
  data.kpis.forEach((kpi) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-body">
        <p class="eyebrow">KPI</p>
        <h2>${kpi.name}</h2>
        <h1>${kpi.value}</h1>
        <p class="subtitle">Change: ${kpi.change}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderTable(id, headers, rows) {
  const table = document.getElementById(id);
  table.innerHTML = '';
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headers.forEach((h) => {
    const th = document.createElement('th');
    th.textContent = h;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);

  const tbody = document.createElement('tbody');
  rows.forEach((row) => {
    const tr = document.createElement('tr');
    row.forEach((cell) => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
}

function setupRouting() {
  const routes = ['automations', 'maru-portal', 'insights', 'roadmap'];
  function applyRoute(route) {
    routes.forEach((r) => {
      const section = document.getElementById(r);
      const link = document.querySelector(`[data-route="${r}"]`);
      const isActive = r === route;
      section.classList.toggle('active', isActive);
      link?.classList.toggle('active', isActive);
    });
  }

  window.addEventListener('hashchange', () => {
    const route = window.location.hash.replace('#/', '') || 'automations';
    applyRoute(route);
  });

  const initialRoute = window.location.hash.replace('#/', '') || 'automations';
  applyRoute(initialRoute);
}

function init() {
  renderWorkflows();
  renderHistory();
  renderList('onboarding-list', data.onboarding);
  renderList('project-list', data.projects);
  renderKpis();
  renderTable(
    'adoption-table',
    ['User', 'Org', 'Runs'],
    data.adoption.map((item) => [item.user, item.org, item.runs.toLocaleString()])
  );
  renderTable(
    'value-table',
    ['Automation', 'Est. Savings', 'Hours Saved', 'Score'],
    data.value.map((item) => [item.automation, item.savings, item.hours, item.score])
  );
  renderList('upcoming-list', data.upcoming);
  renderList('feedback-list', data.feedback);
  setupRouting();
}

document.addEventListener('DOMContentLoaded', init);
