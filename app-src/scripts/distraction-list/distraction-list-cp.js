/**
 * @ngdoc component
 * @name superProductivity.component:distractionList
 * @description
 * # distractionList
 */

(() => {
  'use strict';

  class DistractionListCtrl {
    /* @ngInject */
    constructor($rootScope) {
      this.r = $rootScope.r;
    }
  }

  angular
    .module('superProductivity')
    .component('distractionList', {
      templateUrl: 'scripts/distraction-list/distraction-list-cp.html',
      controller: DistractionListCtrl,
      controllerAs: '$ctrl',
      bindToController: {},
    });

  // hacky fix for ff
  DistractionListCtrl.$$ngIsClass = true;
})();
