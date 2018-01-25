// JS Goes here - ES6 supported
$(function() {
  var mrbo = {
    modules: {
      navigation: require('./modules/_navigation'),
      detectMobile: require('./modules/_detectMobile')
    },

    sections: {
      bespokeScroll: require('./sections/_bespokeScroll'),
      aboutDisplay: require('./sections/_aboutDisplay'),
      selectedWork: require('./sections/_selectedWork'),
      contactPage: require('./sections/_contactPage'),
      boSpeak: require('./sections/_boSpeak')
    },

    // TODO: use throttle for scroll and touchmove?
    registerEvents: function() {
      $(window).on('mousewheel DOMMouseScroll', this.onMouseWheel.bind(this));
    },

    // https://stackoverflow.com/questions/8189840/get-mouse-wheel-events-in-jquery
    onMouseWheel: function(e) {
      // console.log('keep it wheeling..?');
    },

    init: function() {
      // initialize navigation
      this.modules.navigation();

      // register events
      // this.registerEvents();

      // only implement bespokeScroll for home page mobile version
      if (window.section === 'home') {
        this.sections.bespokeScroll.init();
      }

      if (window.section === 'about') {
        this.sections.aboutDisplay.init();
      }

      if (window.section === 'contact') {
        this.sections.contactPage.init();
      }

      if (window.section === 'work') {
        this.sections.selectedWork.init();
      }

      if (window.section === 'bospeak') {
        this.sections.boSpeak.init();
      }
    }
  };

  mrbo.init();
});