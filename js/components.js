/**
 * 共通UIコンポーネント
 * config.js のデータを使ってヘッダー・フッターを描画
 * ベースパスは components.js 自身の src 属性から逆算する
 */
(function() {
  // components.js の src 属性からベースパスを算出
  // 例: src="../../js/components.js" → basePath = "../../"
  // 例: src="../js/components.js"  → basePath = "../"
  // 例: src="./js/components.js"   → basePath = "./"
  function getBasePath() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].getAttribute('src') || '';
      if (src.indexOf('components.js') !== -1) {
        // "../../js/components.js" → "../../"
        // "../js/components.js" → "../"
        // "./js/components.js" → "./"
        return src.replace(/js\/components\.js.*$/, '');
      }
    }
    return './';
  }

  var basePath = getBasePath();

  function resolve(path) {
    // "/index.html" → basePath + "index.html"
    return basePath + path.replace(/^\//, '');
  }

  // アクティブページの判定
  function isActive(navId) {
    var path = location.pathname + location.href;
    if (navId === 'top' && !path.includes('/guide') && !path.includes('/services') && !path.includes('/about') && !path.includes('/consultation') && !path.includes('/contact')) return true;
    if (navId === 'guide' && path.includes('/guide')) return true;
    if (navId === 'services' && path.includes('/services')) return true;
    if (navId === 'about' && path.includes('/about')) return true;
    if (navId === 'consultation' && path.includes('/consultation')) return true;
    return false;
  }

  // ヘッダー描画
  function renderHeader() {
    var el = document.getElementById('site-header');
    if (!el) return;

    var navHtml = SITE.nav.map(function(item) {
      var cls = isActive(item.id) ? ' class="active"' : '';
      return '<a href="' + resolve(item.href) + '"' + cls + '>' + item.label + '</a>';
    }).join('');

    el.innerHTML =
      '<div class="header-inner">' +
        '<a href="' + resolve('/index.html') + '" class="header-brand">' +
          '<img src="' + resolve('/images/logo.png') + '" alt="' + SITE.logoAlt + '" class="header-logo-img" style="height:36px;width:auto;">' +
          '<div><span class="header-title">' + SITE.brand + '</span>' +
          '<span class="header-subtitle">' + SITE.subtitle + '</span></div>' +
        '</a>' +
        '<button class="mobile-menu-toggle" aria-label="メニュー" onclick="this.nextElementSibling.classList.toggle(\'open\');this.textContent=this.textContent===\'☰\'?\'✕\':\'☰\'">☰</button>' +
        '<nav class="header-nav">' + navHtml + '</nav>' +
      '</div>';
  }

  // フッター描画
  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (!el) return;

    var footerNavHtml = SITE.footerNav.map(function(item) {
      return '<a href="' + resolve(item.href) + '">' + item.label + '</a>';
    }).join('');

    el.innerHTML =
      '<div class="container">' +
        '<div class="footer-nav">' + footerNavHtml + '</div>' +
        '<div class="footer-brand">' +
          '<p class="footer-logo">' + SITE.brand + '</p>' +
          '<p class="footer-tagline">' + SITE.subtitle + '</p>' +
        '</div>' +
        '<p class="footer-copy">' + SITE.copyright + '</p>' +
      '</div>';
  }

  // DOM読み込み後に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { renderHeader(); renderFooter(); });
  } else {
    renderHeader();
    renderFooter();
  }
})();
