/* ============================================
   TomoRevo Web — Main JavaScript
   ============================================ */

// --- Tool Data (Chapter 1) ---
const TOOLS = {
  chatgpt: {
    name: 'ChatGPT', category: 'チャット・汎用AI', free: true, price: '無料〜$20/月',
    bestFor: 'なんでも相談・万能型', difficulty: 1, recommend: 5,
    description: '世界で最も使われているAI。質問・文章作成・画像生成（DALL-E）・コード・音声対話・Web検索・エージェント機能まで備えた万能選手。',
    mapPos: { x: 62, y: 42 }, chipClass: 'cat-chat'
  },
  gemini: {
    name: 'Gemini', category: 'チャット・汎用AI', free: true, price: '無料〜$19.99/月',
    bestFor: 'Google連携・画像生成・エージェント', difficulty: 1, recommend: 5,
    description: 'GoogleのAI。Gmail・ドキュメントとの連携が最強。NanoBananaで画像生成、Project Marinerでブラウザ操作、Julesでコーディングまで。エージェント機能の進化が著しい。',
    mapPos: { x: 50, y: 40 }, chipClass: 'cat-chat'
  },
  claude: {
    name: 'Claude', category: 'チャット・汎用AI', free: true, price: '無料〜$20/月',
    bestFor: '長文分析・丁寧な文章・コーディング', difficulty: 1, recommend: 5,
    description: 'Anthropic社のAI。最も丁寧で正確な文章を書く。100万トークンの超大容量で長い文書の分析が得意。Claude Codeで自律的にコーディングも。',
    mapPos: { x: 70, y: 30 }, chipClass: 'cat-chat'
  },
  perplexity: {
    name: 'Perplexity', category: '検索・リサーチ', free: true, price: '無料〜$20/月',
    bestFor: '出典付きリサーチ', difficulty: 1, recommend: 5,
    description: 'AIが調べものをして情報源つきで回答。Deep Researchで自律的に多段階リサーチも可能。専用ブラウザCometも登場。',
    mapPos: { x: 32, y: 28 }, chipClass: 'cat-search'
  },
  copilot: {
    name: 'Copilot', category: '仕事効率化', free: true, price: '無料〜$20/月',
    bestFor: 'Microsoft 365連携', difficulty: 1, recommend: 3,
    description: 'Word・Excel・PowerPoint・Outlook・Teamsの中でAIが使える。Copilot Coworkで長期間のタスクを自律実行するエージェント機能も。',
    mapPos: { x: 30, y: 45 }, chipClass: 'cat-chat'
  },
  genspark: {
    name: 'GenSpark', category: '万能ワークスペース', free: true, price: '無料〜$24.99/月',
    bestFor: '調べる+スライド+動画+電話', difficulty: 2, recommend: 4,
    description: '検索・スライド・動画・ポッドキャスト・Webサイト・AI電話が一体化。Super Agentが9つのAIと80以上のツールを組み合わせて自律的に作業。',
    mapPos: { x: 72, y: 46 }, chipClass: 'cat-workspace'
  },
  manus: {
    name: 'Manus', category: 'AIエージェント', free: true, price: '$39/月〜',
    bestFor: '複雑なタスクを丸投げ', difficulty: 3, recommend: 4,
    description: '汎用AIエージェント。リサーチ・スライド作成・Webサイト構築・ブラウザ操作を自律的に実行。Metaが買収（2025年12月）。',
    mapPos: { x: 88, y: 38 }, chipClass: 'cat-agent'
  },
  gamma: {
    name: 'Gamma', category: 'スライド・資料・Webサイト', free: true, price: '無料〜$8/月',
    bestFor: '爆速プレゼン作成', difficulty: 1, recommend: 4,
    description: 'テキストを入れるだけで60秒でプロ品質のスライドが完成。ドキュメントやWebサイトも作れる。Gamma Agentがリサーチからリスタイルまで対応。',
    mapPos: { x: 48, y: 65 }, chipClass: 'cat-slide'
  },
  nanobanana: {
    name: 'NanoBanana', category: '画像生成', free: true, price: '無料',
    bestFor: '無料で画像を作る', difficulty: 1, recommend: 4,
    description: 'Geminiに搭載されたGoogleの画像生成AI。1日2-3枚が無料。文字も入れられる。',
    mapPos: { x: 28, y: 68 }, chipClass: 'cat-image'
  },
  midjourney: {
    name: 'Midjourney', category: '画像生成', free: false, price: '$10〜/月',
    bestFor: '最高品質の画像', difficulty: 2, recommend: 5,
    description: 'プロ品質のアート作品を生成。画像品質は業界最高峰。クリエイター・デザイナー御用達。',
    mapPos: { x: 56, y: 72 }, chipClass: 'cat-image'
  },
  dalle: {
    name: 'DALL-E', category: '画像生成', free: true, price: 'ChatGPT内',
    bestFor: 'かんたん画像生成', difficulty: 1, recommend: 3,
    description: 'ChatGPTの中で「こんな画像作って」と言うだけ。プロンプト（指示）の正確な解釈が特徴。',
    mapPos: { x: 42, y: 70 }, chipClass: 'cat-image'
  },
  ideogram: {
    name: 'Ideogram', category: '画像生成', free: true, price: '無料〜$20/月',
    bestFor: '文字入り画像', difficulty: 2, recommend: 3,
    description: '画像の中に読める文字を入れられる。ロゴ・バナー・SNS投稿画像に最適。CSVで一括生成も。',
    mapPos: { x: 52, y: 78 }, chipClass: 'cat-image'
  },
  cursor: {
    name: 'Cursor', category: '開発エディタ（AIエージェント搭載）', free: true, price: '無料〜$20/月',
    bestFor: 'AIと一緒にコーディング', difficulty: 4, recommend: 4,
    description: 'VS Codeベースのエディタ。AIがリアルタイムで補完・提案。Agent Modeで複数ファイルの自律編集も可能。Claude Codeと併用する開発者が多い。',
    mapPos: { x: 80, y: 80 }, chipClass: 'cat-dev'
  },
  claudecode: {
    name: 'Claude Code', category: 'AIエージェント（開発）', free: false, price: '$20/月〜',
    bestFor: 'AIにコーディングを任せる', difficulty: 5, recommend: 5,
    description: 'ターミナルから指示するとAIが自律的にコード全体を読み、計画を立て、実装・テスト・修正まで行う。このサイトもClaude Codeで作られている。',
    mapPos: { x: 90, y: 86 }, chipClass: 'cat-agent'
  },
  typeless: {
    name: 'Typeless', category: '音声入力', free: true, price: '無料〜$12/月',
    bestFor: '声で文字入力（全端末）', difficulty: 1, recommend: 4,
    description: '話すだけで意図を汲んだ文章に変換。Mac・Windows・iOS・Android全対応。週4,000文字まで無料。',
    mapPos: { x: 22, y: 55 }, chipClass: 'cat-voice'
  },
  aquavoice: {
    name: 'AquaVoice', category: '音声入力', free: false, price: '$8/月',
    bestFor: '高品質音声入力（Mac）', difficulty: 2, recommend: 3,
    description: '話した内容を出版レベルの文章に変換。専門用語の精度97%。Mac専用。',
    mapPos: { x: 38, y: 55 }, chipClass: 'cat-voice'
  },
  obsidian: {
    name: 'Obsidian', category: 'ナレッジ管理', free: true, price: '無料',
    bestFor: '第二の脳を作る', difficulty: 3, recommend: 4,
    description: 'メモとメモがつながるナレッジ管理。データはローカル保存でプライバシー安心。AIプラグインで更に強力に。',
    mapPos: { x: 60, y: 55 }, chipClass: 'cat-knowledge'
  }
};

// --- DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initToolMap();
  initAccordions();
  initActionCheckbox();
  initProgress();
  initSmoothScroll();
  initForms();
  initConditionalFields();
  setActiveNav();
  initScrollReveal();
});

// --- Scroll Reveal (IntersectionObserver) ---
function initScrollReveal() {
  const els = document.querySelectorAll('.glass-card, .chapter-card, .section-title, .section-label, .section-desc, .hero-badge, .hero h1, .hero-desc, .hero-buttons, .action-section, .client-voice, .about-profile, .value-card, .service-step, .price-card, .form-card, .tool-map-wrapper, .accordion, .tool-cards, .chapter-footer-nav');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger cards within grids
    const parent = el.parentElement;
    if (parent && (parent.classList.contains('card-grid') || parent.classList.contains('chapter-scroll'))) {
      const siblings = Array.from(parent.children);
      const idx = siblings.indexOf(el);
      if (idx >= 0 && idx <= 6) el.classList.add(`reveal-delay-${idx + 1}`);
    }
    observer.observe(el);
  });
}

// --- Mobile Menu ---
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.header-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
  });
  // Close on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.textContent = '☰';
    });
  });
}

// --- Active Nav ---
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.header-nav a, .footer-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.includes(href) && href !== '/') {
      link.classList.add('active');
    } else if (href === '/' && (path === '/' || path.endsWith('/index.html'))) {
      // Only mark home active if we're actually on home
      const isHome = !path.includes('/guide') && !path.includes('/services') && !path.includes('/about') && !path.includes('/consultation') && !path.includes('/contact');
      if (isHome) link.classList.add('active');
    }
  });
}

// --- Tool Map ---
function initToolMap() {
  const mapEl = document.getElementById('tool-map');
  if (!mapEl) return;
  Object.entries(TOOLS).forEach(([key, tool]) => {
    const chip = document.createElement('button');
    chip.className = `tool-chip ${tool.chipClass}`;
    chip.textContent = tool.name;
    chip.style.left = tool.mapPos.x + '%';
    chip.style.top = tool.mapPos.y + '%';
    chip.setAttribute('data-tool', key);
    chip.setAttribute('aria-label', `${tool.name}の詳細を見る`);
    chip.addEventListener('click', (e) => { e.stopPropagation(); showToolTooltip(key); });
    mapEl.appendChild(chip);
  });
}

function showToolTooltip(key) {
  const tool = TOOLS[key];
  if (!tool) return;
  const tooltip = document.getElementById('tool-tooltip');
  const overlay = document.getElementById('tooltip-overlay');
  if (!tooltip || !overlay) return;
  document.getElementById('tooltip-name').textContent = tool.name;
  document.getElementById('tooltip-category').textContent = tool.category;
  document.getElementById('tooltip-desc').textContent = tool.description;
  const metaEl = document.getElementById('tooltip-meta');
  metaEl.innerHTML = '';
  const freeTag = document.createElement('span');
  freeTag.className = 'tool-meta-tag ' + (tool.free ? 'free' : 'paid');
  freeTag.textContent = tool.free ? '無料プランあり' : '有料のみ';
  metaEl.appendChild(freeTag);
  const priceTag = document.createElement('span');
  priceTag.className = 'tool-meta-tag';
  priceTag.textContent = tool.price;
  metaEl.appendChild(priceTag);
  const diffTag = document.createElement('span');
  diffTag.className = 'tool-meta-tag';
  diffTag.textContent = '難易度 ' + '★'.repeat(tool.difficulty) + '☆'.repeat(5 - tool.difficulty);
  metaEl.appendChild(diffTag);
  tooltip.classList.add('show');
  overlay.classList.add('show');
  document.querySelectorAll('.tool-chip').forEach(c => c.classList.remove('active'));
  const activeChip = document.querySelector(`.tool-chip[data-tool="${key}"]`);
  if (activeChip) activeChip.classList.add('active');
}

function hideToolTooltip() {
  const t = document.getElementById('tool-tooltip');
  const o = document.getElementById('tooltip-overlay');
  if (t) t.classList.remove('show');
  if (o) o.classList.remove('show');
  document.querySelectorAll('.tool-chip').forEach(c => c.classList.remove('active'));
}

// --- Accordion ---
function initAccordions() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.contains('open');
      const accordion = item.closest('.accordion');
      accordion.querySelectorAll('.accordion-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.accordion-content').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// --- Action Checkbox ---
function initActionCheckbox() {
  const checkbox = document.getElementById('action-checkbox');
  const label = document.getElementById('action-checkbox-label');
  if (!checkbox || !label) return;
  const completed = localStorage.getItem('chapter1_completed') === 'true';
  if (completed) {
    label.classList.add('checked');
    checkbox.checked = true;
    const msg = document.getElementById('level-up-message');
    if (msg) msg.classList.add('show');
  }
  label.addEventListener('click', () => {
    const isChecked = label.classList.contains('checked');
    if (isChecked) {
      label.classList.remove('checked');
      checkbox.checked = false;
      localStorage.setItem('chapter1_completed', 'false');
      const msg = document.getElementById('level-up-message');
      if (msg) msg.classList.remove('show');
    } else {
      label.classList.add('checked');
      checkbox.checked = true;
      localStorage.setItem('chapter1_completed', 'true');
      const msg = document.getElementById('level-up-message');
      if (msg) msg.classList.add('show');
      triggerConfetti();
    }
    updateProgress();
  });
}

// --- Progress ---
function initProgress() { updateProgress(); }
function updateProgress() {
  const total = 6;
  let completed = 0;
  if (localStorage.getItem('chapter1_completed') === 'true') completed = 1;
  const pct = Math.round((completed / total) * 100);
  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = pct + '%';
  const label = document.getElementById('progress-label');
  if (label) label.textContent = `${completed}/${total} 完了`;
}

// --- Confetti ---
function triggerConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);
  const colors = ['#FF6B6B', '#FFB347', '#4ADE80', '#22D3EE', '#A78BFA', '#F472B6', '#FBBF24'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.width = (Math.random() * 8 + 6) + 'px';
    piece.style.height = (Math.random() * 8 + 6) + 'px';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.setProperty('--delay', (Math.random() * 0.8) + 's');
    piece.style.setProperty('--duration', (Math.random() * 2 + 2) + 's');
    piece.style.setProperty('--rotation', (Math.random() * 1440 - 720) + 'deg');
    container.appendChild(piece);
  }
  setTimeout(() => container.remove(), 4000);
}

// --- Smooth Scroll ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

// --- Forms (Google Sheets integration) ---
function initForms() {
  document.querySelectorAll('form[data-sheet-url]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = '送信中...';
      btn.disabled = true;

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => { data[key] = value; });
      data['timestamp'] = new Date().toLocaleString('ja-JP');

      try {
        const url = form.getAttribute('data-sheet-url');
        if (url && url !== 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
          await fetch(url, {
            method: 'POST', mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
        }
        // Show success
        form.style.display = 'none';
        const success = form.parentElement.querySelector('.form-success');
        if (success) success.classList.add('show');
      } catch (err) {
        console.error('Form submit error:', err);
        btn.textContent = 'エラーが発生しました。もう一度お試しください。';
        setTimeout(() => { btn.textContent = originalText; btn.disabled = false; }, 3000);
      }
    });
  });
}

// --- Conditional Fields ---
function initConditionalFields() {
  const select = document.getElementById('ai-experience');
  const conditional = document.getElementById('ai-experience-details');
  if (!select || !conditional) return;
  select.addEventListener('change', () => {
    if (select.value === 'yes' || select.value === 'a-little') {
      conditional.classList.add('show');
    } else {
      conditional.classList.remove('show');
    }
  });
}
