/* Liens des magasins (un seul endroit à modifier).
   APP_STORE : l'app iPhone (publiée le 12/11/2026). */
var SB = {
  PLAY: "https://play.google.com/store/apps/details?id=com.an23.secretbox",
  APP_STORE: "https://apps.apple.com/app/secretbox-guess-it/id6824044492",
  PRIVACY: "https://docs.google.com/document/d/e/2PACX-1vSS7EzqrXEaqs8LofawZSuklmV3M29sUopgBX9zg4I_8NE5HGm6UmSTWSXlfQ3Nuh3YFdJE7po-vgyp/pub"
};
SB.isAndroid = /android/i.test(navigator.userAgent);
SB.isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
