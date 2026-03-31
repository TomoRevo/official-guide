/**
 * サイト共通設定
 * ブランド名・ナビ・テキスト等を一元管理
 * 変更はここだけでOK → 全ページに反映される
 */
var SITE = {
  brand: 'TomoRevo',
  subtitle: 'AI導入 × コーチング',
  logoAlt: 'TomoRevo',
  copyright: '&copy; 2026 TomoRevo',
  footerCta: {
    text: 'AI活用について相談してみませんか？',
    label: '無料個別相談を予約する →',
    href: '/consultation/index.html'
  },
  nav: [
    { label: 'トップ',       href: '/index.html',              id: 'top' },
    { label: 'ガイド',       href: '/guide/index.html',        id: 'guide' },
    { label: 'サービス',     href: '/services/index.html',     id: 'services' },
    { label: 'プロフィール', href: '/about/index.html',        id: 'about' },
    { label: '個別相談',     href: '/consultation/index.html', id: 'consultation' }
  ],
  footerNav: [
    { label: 'トップ',         href: '/index.html' },
    { label: 'ガイド',         href: '/guide/index.html' },
    { label: 'サービス',       href: '/services/index.html' },
    { label: 'プロフィール',   href: '/about/index.html' },
    { label: '個別相談',       href: '/consultation/index.html' },
    { label: '質問・リクエスト', href: '/contact/index.html' }
  ]
};
