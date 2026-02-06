/**
 * DeckGlossary — centralized jargon definitions.
 * Shared terms live here; each deck calls addTerms() for segment-specific ones.
 * Each term can be a string (definition only) or { def, url } for external links.
 */
var DeckGlossary = {
  terms: {},

  sharedTerms: {
    'EBITDA': { def: 'Earnings Before Interest, Taxes, Depreciation & Amortisation — a measure of operating profitability.', url: 'https://en.wikipedia.org/wiki/EBITDA' },
    'ROI': { def: 'Return on Investment — net gain divided by cost, expressed as a multiple or percentage.', url: 'https://en.wikipedia.org/wiki/Return_on_investment' },
    'SLA': { def: 'Service Level Agreement — a contractual commitment on performance (e.g. response time, uptime).', url: 'https://en.wikipedia.org/wiki/Service-level_agreement' },
    'PM compliance': 'Preventive Maintenance compliance — the percentage of scheduled maintenance tasks completed on time.',
    'REIT': { def: 'Real Estate Investment Trust — a company that owns and operates income-producing real estate.', url: 'https://en.wikipedia.org/wiki/Real_estate_investment_trust' },
    'CAPEX': { def: 'Capital Expenditure — spending on long-term assets like equipment and buildings.', url: 'https://en.wikipedia.org/wiki/Capital_expenditure' },
    'OPEX': { def: 'Operational Expenditure — day-to-day running costs.', url: 'https://en.wikipedia.org/wiki/Operating_expense' },
    'NOI': { def: 'Net Operating Income — revenue minus operating expenses, before tax and financing.', url: 'https://en.wikipedia.org/wiki/Net_operating_income' },
    'NPS': { def: 'Net Promoter Score — a measure of customer satisfaction and loyalty (-100 to +100).', url: 'https://en.wikipedia.org/wiki/Net_promoter_score' },
    'BMS': { def: 'Building Management System — centralised controls for HVAC, lighting, fire, and electrical systems.', url: 'https://en.wikipedia.org/wiki/Building_management_system' },
    'CMMS': { def: 'Computerised Maintenance Management System — software for scheduling and tracking maintenance.', url: 'https://en.wikipedia.org/wiki/Computerized_maintenance_management_system' },
    'CAFM': 'Computer-Aided Facility Management — what FMX is.',
    'MTBF': { def: 'Mean Time Between Failures — average time a piece of equipment runs before breaking down.', url: 'https://en.wikipedia.org/wiki/Mean_time_between_failures' },
    'MTTR': { def: 'Mean Time To Repair — average time to restore equipment after a failure.', url: 'https://en.wikipedia.org/wiki/Mean_time_to_repair' },
    'FMX': { def: 'IFCA\'s Facility Management platform — mobile-first, built for ASEAN.', url: 'https://www.ifca.asia' },
    'MOH': { def: 'Ministry of Health Malaysia — regulates private healthcare facilities.', url: 'https://www.moh.gov.my' },
    'BOMBA': { def: 'Fire and Rescue Department of Malaysia — enforces fire safety compliance.', url: 'https://www.bomba.gov.my' },
    'JKKP': { def: 'Department of Occupational Safety and Health (DOSH) — enforces workplace safety.', url: 'https://www.dosh.gov.my' },
    'DOSH': { def: 'Department of Occupational Safety and Health — workplace safety regulator.', url: 'https://www.dosh.gov.my' },
    'PE': { def: 'Private Equity — investment firms that acquire and improve companies for returns.', url: 'https://en.wikipedia.org/wiki/Private_equity' },
    'OEM': { def: 'Original Equipment Manufacturer — the company that made the equipment (e.g. Siemens, GE).', url: 'https://en.wikipedia.org/wiki/Original_equipment_manufacturer' },
    'KPI': { def: 'Key Performance Indicator — a measurable value showing how effectively a target is being achieved.', url: 'https://en.wikipedia.org/wiki/Performance_indicator' },
    'ESG': { def: 'Environmental, Social & Governance — sustainability framework increasingly required by investors.', url: 'https://en.wikipedia.org/wiki/Environmental,_social,_and_corporate_governance' },
  },

  init: function() {
    this.terms = Object.assign({}, this.sharedTerms);
  },

  addTerms: function(extras) {
    Object.assign(this.terms, extras);
  },

  /** Returns { def, url } or null. Accepts string entries for backward compat. */
  getTerm: function(term) {
    var entry = this.terms[term] || this.terms[term.toUpperCase()] || null;
    if (!entry) return null;
    if (typeof entry === 'string') return { def: entry, url: null };
    return { def: entry.def, url: entry.url || null };
  },

  /** @deprecated — use getTerm(). Kept for backward compat. */
  getDefinition: function(term) {
    var t = this.getTerm(term);
    return t ? t.def : null;
  },

  bind: function() {
    if (!this.terms || Object.keys(this.terms).length === 0) {
      this.init();
    }
    // tooltips.js handles the actual event listeners
  }
};

DeckGlossary.init();
