/**
 * KINDERFARMS® BRAND COMMAND CENTER — INTERACTIVE ENGINE (v2)
 * Features: Live Search (Ctrl+K), Token Clipboard Engine, Type Specimen Studio,
 * Competitor Matrix Filter, Sub-Brand Migration Lookup, Voice/Tone Simulator & Token Exporter.
 */

document.addEventListener('DOMContentLoaded', () => {
  initClipboardEngine();
  initSearchEngine();
  initTypographySandbox();
  initArchitectureFilter();
  initCompetitorFilter();
  initSubBrandLookup();
  initToneSimulator();
  initTokenExporter();
  initScrollspy();
});

// ── TOAST NOTIFICATIONS ──
function showToast(message, icon = '✓') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="color: var(--kf-blue-light); font-weight: 800;">${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2200);
}

// ── 1-CLICK CLIPBOARD ENGINE ──
function initClipboardEngine() {
  // Swatch copy
  document.querySelectorAll('.swatch-box').forEach(swatch => {
    swatch.addEventListener('click', () => {
      const hex = swatch.dataset.hex;
      const varName = swatch.dataset.var || '';
      const name = swatch.dataset.name || hex;
      
      navigator.clipboard.writeText(hex).then(() => {
        showToast(`Copied ${name} (${hex}) to clipboard!`);
      });
    });
  });

  // Generic copy buttons
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const textToCopy = btn.dataset.copy;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard!`);
      });
    });
  });

  // Code box copy
  document.querySelectorAll('.btn-copy-code').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-box').querySelector('code') || btn.closest('.code-box');
      const text = codeBlock.innerText.replace('Copy', '').trim();
      navigator.clipboard.writeText(text).then(() => {
        showToast('Code snippet copied!');
      });
    });
  });
}

// ── LIVE SEARCH ENGINE (Ctrl+K) ──
function initSearchEngine() {
  const searchBackdrop = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const triggerBtns = document.querySelectorAll('.search-trigger-btn');

  // Search index items
  const searchIndex = [
    { title: 'Brand Story & 3am Manifesto', section: 'section-story', category: 'Foundation', desc: 'Jessica Biel & Jeremy Adams parent-founded story & clean label mission.' },
    { title: 'Brand Positioning: Kids Deserve Less', section: 'section-positioning', category: 'Strategy', desc: 'The strategic shift from clean to intentional subtraction.' },
    { title: 'Master Brand Architecture', section: 'section-architecture', category: 'Architecture', desc: 'Monolithic architecture and 2 core verticals (Hydration & Medicine).' },
    { title: 'Sub-Brand Retirement Guide', section: 'section-sub-brands', category: 'Architecture', desc: 'Migration table for KinderLyte, KinderMed, and KinderSprout SKUs.' },
    { title: 'Design System & 8-Flavor Tokens', section: 'section-colors', category: 'Visuals', desc: 'Core brand colors, 8-flavor seed palette, and WCAG contrast ratings.' },
    { title: 'Typography & Specimen Studio', section: 'section-typography', category: 'Visuals', desc: 'Tropiline Bold, Montserrat, type scale hierarchy, and live sandbox.' },
    { title: 'Brand Kit & Logo System', section: 'section-brand-kit', category: 'Assets', desc: 'Master logotype, clear space, badge icons, and SVG assets.' },
    { title: 'Packaging & Clean-Label Badges', section: 'section-packaging', category: 'Packaging', desc: 'Certified clean-label icon stamps and front-of-pack blueprint.' },
    { title: 'UI Component Library & Patterns', section: 'section-components', category: 'UI Craft', desc: 'Production 55px buttons, pill action controls, and surface stages.' },
    { title: 'Design Token Contract & Spec', section: 'section-tokens-spec', category: 'Tokens', desc: 'Complete token inventory (1600px container, 55px button height, layers).' },
    { title: 'Competitor Intelligence Matrix', section: 'section-competitors', category: 'Market', desc: 'Head-to-head comparison with Pedialyte, Genexa, Tylenol, and Liquid I.V.' },
    { title: 'Brand Messaging & Persona Playbook', section: 'section-messaging', category: 'Content', desc: 'Taglines, elevator pitches, and talking points for parents & pediatricians.' },
    { title: 'Brand Voice & Tone Simulator', section: 'section-voice', category: 'Voice', desc: 'Stress-level tone flex, word bank, and before/after copy matrix.' },
    { title: 'Brand Guidelines, Dos & Don’ts', section: 'section-guidelines', category: 'Governance', desc: 'Execution guardrails, packaging rules, and visual standards.' },
    { title: 'Asset Vault & Token Exporter', section: 'section-vault', category: 'Export', desc: 'Downloadable design tokens (JSON, Tailwind, CSS) and SVG assets.' }
  ];

  function openSearch() {
    searchBackdrop.classList.add('open');
    searchInput.value = '';
    renderResults(searchIndex);
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeSearch() {
    searchBackdrop.classList.remove('open');
  }

  function renderResults(items) {
    if (items.length === 0) {
      searchResults.innerHTML = `<div style="padding: 24px; text-align: center; color: var(--kf-text-muted);">No matching sections found.</div>`;
      return;
    }

    searchResults.innerHTML = items.map(item => `
      <a href="#${item.section}" class="search-result-item" onclick="document.getElementById('searchModal').classList.remove('open')">
        <div>
          <div style="font-weight: 700; color: #fff; font-size: 14px;">${item.title}</div>
          <div style="font-size: 12px; color: var(--kf-text-muted); margin-top: 2px;">${item.desc}</div>
        </div>
        <span class="nav-tag">${item.category}</span>
      </a>
    `).join('');
  }

  triggerBtns.forEach(btn => btn.addEventListener('click', openSearch));

  searchBackdrop.addEventListener('click', (e) => {
    if (e.target === searchBackdrop) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchBackdrop.classList.contains('open')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && searchBackdrop.classList.contains('open')) {
      closeSearch();
    }
  });

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      renderResults(searchIndex);
      return;
    }
    const filtered = searchIndex.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
    renderResults(filtered);
  });
}

// ── TYPOGRAPHY SPECIMEN STUDIO ──
function initTypographySandbox() {
  const textInput = document.getElementById('typeSandboxInput');
  const sizeSlider = document.getElementById('typeSizeSlider');
  const sizeValueDisplay = document.getElementById('typeSizeValue');
  const previewBox = document.getElementById('typeSandboxPreview');
  const fontSelect = document.getElementById('typeFontSelect');
  const weightSelect = document.getElementById('typeWeightSelect');

  if (!textInput || !previewBox) return;

  function updatePreview() {
    const text = textInput.value || 'Kids Deserve Less. Clean, kind, effective care.';
    const size = sizeSlider.value;
    const font = fontSelect ? fontSelect.value : 'serif';
    const weight = weightSelect ? weightSelect.value : '700';

    previewBox.innerText = text;
    previewBox.style.fontSize = `${size}px`;
    previewBox.style.fontWeight = weight;
    previewBox.style.fontFamily = font === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)';
    if (sizeValueDisplay) sizeValueDisplay.innerText = `${size}px`;
  }

  textInput.addEventListener('input', updatePreview);
  if (sizeSlider) sizeSlider.addEventListener('input', updatePreview);
  if (fontSelect) fontSelect.addEventListener('change', updatePreview);
  if (weightSelect) weightSelect.addEventListener('change', updatePreview);
}

// ── BRAND ARCHITECTURE VERTICAL FILTER ──
function initArchitectureFilter() {
  const tabs = document.querySelectorAll('.vertical-tab');
  const skuCards = document.querySelectorAll('.sku-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter; // 'all', 'hydration', 'medicine'

      skuCards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ── COMPETITOR MATRIX FILTER ──
function initCompetitorFilter() {
  const compButtons = document.querySelectorAll('.comp-filter-btn');
  const matrixRows = document.querySelectorAll('.matrix-row');

  compButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      compButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetComp = btn.dataset.competitor; // 'all', 'pedialyte', 'genexa', 'tylenol', 'liquidiv'

      matrixRows.forEach(row => {
        if (targetComp === 'all' || row.dataset.brand === targetComp || row.classList.contains('highlight-kf')) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
}

// ── SUB-BRAND RETIREMENT LOOKUP ──
function initSubBrandLookup() {
  const searchInput = document.getElementById('subBrandSearch');
  const rows = document.querySelectorAll('.migration-row');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();

    rows.forEach(row => {
      const text = row.innerText.toLowerCase();
      if (!q || text.includes(q)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
}

// ── VOICE & TONE SIMULATOR ──
function initToneSimulator() {
  const toneSlider = document.getElementById('toneSlider');
  const toneLabel = document.getElementById('toneContextLabel');
  const toneDesc = document.getElementById('toneContextDesc');
  const toneExample = document.getElementById('toneExampleCopy');

  if (!toneSlider || !toneLabel) return;

  const toneContexts = [
    {
      label: 'High Stress (3am Sick Child / Fever)',
      desc: 'Minimal, steady, reassuring. Short sentences, zero flourish, immediate dosing clarity.',
      example: '“We know that midnight fever feeling. The same active ingredient pediatricians recommend. Nothing unnecessary.”'
    },
    {
      label: 'OTC Medicine & Dosing Guidance',
      desc: 'Trusting, clinical-but-gentle, safety-first, plain speak.',
      example: '“Acetaminophen helps reduce fever and relieve pain. Made without artificial dyes, sucralose, or parabens.”'
    },
    {
      label: 'Educational & Ingredient Transparency',
      desc: 'Clean, transparent, factual. Science stated plainly.',
      example: '“Dextrose — a simple sugar — helps the body absorb electrolytes and fluids faster. No artificial sweeteners, ever.”'
    },
    {
      label: 'Daily Hydration & Family Play',
      desc: 'Energetic, refreshing, warm, treat-like.',
      example: '“Fruit Punch. Strawberry. Orange. Choosing a flavor is the hardest part of playtime.”'
    },
    {
      label: 'Cultural Movement & UnHour',
      desc: 'Wry, validating, parent-to-parent, anti-noise.',
      example: '“Kids don’t need another scheduled activity. Turn off the notifications and take a breather.”'
    }
  ];

  toneSlider.addEventListener('input', () => {
    const idx = parseInt(toneSlider.value, 10);
    const ctx = toneContexts[idx];
    if (ctx) {
      toneLabel.innerText = ctx.label;
      toneDesc.innerText = ctx.desc;
      toneExample.innerText = ctx.example;
    }
  });
}

// ── TOKEN EXPORTER ──
function initTokenExporter() {
  const exportFormatSelect = document.getElementById('exportFormatSelect');
  const exportCodeOutput = document.getElementById('exportCodeOutput');

  if (!exportFormatSelect || !exportCodeOutput) return;

  const formats = {
    css: `:root {
  /* KinderFarms v2 Master Brand Tokens */
  --bg: #FFFFFF;
  --accent: #D11994;
  --dark-header: #0E1320;
  --surface: #F6F6F6;
  --fg: #444749;
  --kf-blue: #1A6DFF;
  --kf-deep-navy: #171445;
  --kf-porcelain: #F9F7F4;
  --kf-leaf: #3E9B57;

  /* 8-Flavor Seed Palette */
  --kf-strawberry: #E8416F;
  --kf-cherry: #D6443F;
  --kf-citrus-orange: #F27A1A;
  --kf-lemon: #F2C14E;
  --kf-berry-purple: #8B5CBF;
  --kf-raspberry: #C13584;
  --kf-watermelon-pink: #F57E9E;
  --kf-tropical: #F0A93B;

  /* Dimensions & Layout */
  --container-max: 1600px;
  --btn-height: 55px;
  --btn-radius: 4px;
  --section-margin: 72px;
}`,
    tailwind: `// tailwind.config.js / @theme
module.exports = {
  theme: {
    extend: {
      colors: {
        kinder: {
          accent: '#D11994',
          blue: '#1A6DFF',
          navy: '#171445',
          onyx: '#0E1320',
          porcelain: '#F9F7F4',
          surface: '#F6F6F6',
          strawberry: '#E8416F',
          cherry: '#D6443F',
          citrus: '#F27A1A',
          lemon: '#F2C14E',
          berry: '#8B5CBF',
          raspberry: '#C13584',
          watermelon: '#F57E9E',
          tropical: '#F0A93B',
          leaf: '#3E9B57',
        }
      },
      fontFamily: {
        display: ['"Tropiline Bold"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      }
    }
  }
};`,
    json: `{
  "brand": "KinderFarms",
  "version": "2.0.0",
  "tokens": {
    "colors": {
      "accent": "#D11994",
      "blue": "#1A6DFF",
      "navy": "#171445",
      "darkHeader": "#0E1320",
      "porcelain": "#F9F7F4",
      "surface": "#F6F6F6",
      "flavors": {
        "strawberry": "#E8416F",
        "cherry": "#D6443F",
        "citrusOrange": "#F27A1A",
        "lemon": "#F2C14E",
        "berryPurple": "#8B5CBF",
        "raspberry": "#C13584",
        "watermelonPink": "#F57E9E",
        "tropical": "#F0A93B"
      }
    },
    "dimensions": {
      "containerMax": "1600px",
      "buttonHeight": "55px",
      "buttonRadius": "4px",
      "sectionMargin": "72px"
    }
  }
}`
  };

  exportFormatSelect.addEventListener('change', () => {
    const fmt = exportFormatSelect.value;
    exportCodeOutput.innerText = formats[fmt] || formats.css;
  });
}

// ── SCROLLSPY ──
function initScrollspy() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.brand-section');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
