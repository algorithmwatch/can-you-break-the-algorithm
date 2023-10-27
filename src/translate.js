/** @ngInject */
module.exports.translateConfig = function translateConfig($translateProvider, tmhDynamicLocaleProvider) {
  // Load current locale
  tmhDynamicLocaleProvider.localeLocationPattern('//code.angularjs.org/1.2.20/i18n/angular-locale_{{locale}}.js');
  // Configure Angular Translate
  $translateProvider
    .useStaticFilesLoader({
      prefix: 'locales/',
      suffix: '.json'
    })
    .registerAvailableLanguageKeys(['en', 'de', 'es'], {
      'en_US': 'en',
      'en_UK': 'en',
      'en-US': 'en',
      'en-UK': 'en',
      'de_DE': 'de',
      'de-DE': 'de',
      'es-AR': 'es',
      'es_AR': 'es',
      'es-BO': 'es',
      'es_BO': 'es',
      'es-CL': 'es',
      'es_CL': 'es',
      'es-CO': 'es',
      'es_CO': 'es',
      'es-CR': 'es',
      'es_CR': 'es',
      'es-DO': 'es',
      'es_DO': 'es',
      'es-EC': 'es',
      'es_EC': 'es',
      'es-ES': 'es',
      'es_ES': 'es',
      'es-GT': 'es',
      'es_GT': 'es',
      'es-HN': 'es',
      'es_HN': 'es',
      'es-MX': 'es',
      'es_MX': 'es',
      'es-NI': 'es',
      'es_NI': 'es',
      'es-PA': 'es',
      'es_PA': 'es',
      'es-PE': 'es',
      'es_PE': 'es',
      'es-PR': 'es',
      'es_PR': 'es',
      'es-PY': 'es',
      'es_PY': 'es',
      'es-SV': 'es',
      'es_SV': 'es',
      'es-US': 'es',
      'es_US': 'es',
      'es-UY': 'es',
      'es_UY': 'es',
      'es-VE': 'es',
      'e_-VE': 'es'
    })
    .determinePreferredLanguage()
    .fallbackLanguage('en')
    .useLocalStorage()
    .useSanitizeValueStrategy(null);
};

/** @ngInject */
module.exports.translateRun = function translateRun($transitions, $location, $translate, tmhDynamicLocale) {
  // Redirect to login if route requires auth and you're not logged in
  $transitions.onSuccess({}, () => {
    // Get the lang from the file name
    const fileLang = ($location.absUrl().match(/\/(\w{2})\.html/) || [])[1];
    // Or get lang from location search
    const lang = fileLang || $location.search().lang;
    // Does the search param exists?
    if ($translate.getAvailableLanguageKeys().indexOf(lang) > -1) {
      // Update current language
      $translate.use(lang);
      tmhDynamicLocale.set(lang.slice(0, 2));
    } else {
      tmhDynamicLocale.set($translate.use().slice(0, 2));
    }
  });
};
