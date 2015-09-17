angular.module('openlayers-layerswitcher', ['openlayers-directive'])
  .directive('layerSwitcher', function(olControlLayerSwitcher) {
    return {
      restrict: 'E',
      require: '^openlayers',
      link: function (scope, _, _, controller) {
        var olControl = olControlLayerSwitcher.control;
        var olScope = controller.getOpenlayersScope();

        olScope.getMap().then(function(map) {
          scope.$on('$destroy', function() {
            map.removeControl(olControl);
          });

          map.addControl(olControl);
        });
      }
    };
  });
