/**
 * DeckGlossary — centralized jargon definitions.
 * Shared terms live here; each deck calls addTerms() for segment-specific ones.
 */
var DeckGlossary = {
  terms: {},

  sharedTerms: {
    'EBITDA': 'Earnings Before Interest, Taxes, Depreciation & Amortisation — a measure of operating profitability.',
    'ROI': 'Return on Investment — net gain divided by cost, expressed as a multiple or percentage.',
    'SLA': 'Service Level Agreement — a contractual commitment on performance (e.g. response time, uptime).',
    'PM compliance': 'Preventive Maintenance compliance — the percentage of scheduled maintenance tasks completed on time.',
    'REIT': 'Real Estate Investment Trust — a company that owns and operates income-producing real estate.',
    'CAPEX': 'Capital Expenditure — spending on long-term assets like equipment and buildings.',
    'OPEX': 'Operational Expenditure — day-to-day running costs.',
    'NOI': 'Net Operating Income — revenue minus operating expenses, before tax and financing.',
    'NPS': 'Net Promoter Score — a measure of customer satisfaction and loyalty (-100 to +100).',
    'BMS': 'Building Management System — centralised controls for HVAC, lighting, fire, and electrical systems.',
    'CMMS': 'Computerised Maintenance Management System — software for scheduling and tracking maintenance.',
    'CAFM': 'Computer-Aided Facility Management — what FMX is.',
    'MTBF': 'Mean Time Between Failures — average time a piece of equipment runs before breaking down.',
    'MTTR': 'Mean Time To Repair — average time to restore equipment after a failure.',
    'FMX': 'IFCA\'s Facility Management platform — mobile-first, built for ASEAN.',
    'MOH': 'Ministry of Health Malaysia — regulates private healthcare facilities.',
    'BOMBA': 'Fire and Rescue Department of Malaysia — enforces fire safety compliance.',
    'JKKP': 'Department of Occupational Safety and Health (DOSH) — enforces workplace safety.',
    'DOSH': 'Department of Occupational Safety and Health — workplace safety regulator.',
    'PE': 'Private Equity — investment firms that acquire and improve companies for returns.',
    'OEM': 'Original Equipment Manufacturer — the company that made the equipment (e.g. Siemens, GE).',
    'KPI': 'Key Performance Indicator — a measurable value showing how effectively a target is being achieved.',
    'ESG': 'Environmental, Social & Governance — sustainability framework increasingly required by investors.',
  },

  init: function() {
    this.terms = Object.assign({}, this.sharedTerms);
  },

  addTerms: function(extras) {
    Object.assign(this.terms, extras);
  },

  getDefinition: function(term) {
    return this.terms[term] || this.terms[term.toUpperCase()] || null;
  },

  bind: function() {
    if (!this.terms || Object.keys(this.terms).length === 0) {
      this.init();
    }
    // tooltips.js handles the actual event listeners
  }
};

DeckGlossary.init();
