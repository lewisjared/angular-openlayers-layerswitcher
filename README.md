# angular-openlayers-layerswitcher

An AngularJS directive for selecting visible layers for a [tombatossals/angular-openlayers-directive](https://github.com/tombatossals/angular-openlayers-directive) OpenLayers3 Map.
The core code for displaying the map have been adapted from [ol3-layerswitcher](https://github.com/walkermatt/ol3-layerswitcher).


All layers should have a `title` property and base layers should have a `type` property set to `base`. Group layers (`ol.layer.Group`) can be used to visually group layers together. See [examples/layerswitcher.js](examples/layerswitcher.js) for usage.

## Demo

Clone or download the repository and open [examples/layerswitcher.html](examples/layerswitcher.html) in a browser.


## Installing

Install the module from bower:

    bower install --save angular-openlayers-layerswitcher

Add the `openlayers-layerswitcher` module as a dependency to your project:

    // Add Restangular as a dependency to your app
    angular.module('your-app', ['openlayers-layerswitcher']);

For a complete example see: [examples/layerswitcher.html](examples/layerswitcher.html) 


## Usage
This module defines a single directive element: `layer-switcher`. This directive should be added as a child of an `openlayers` node
to display a layer switcher:

      <openlayers height="100%">
        <layer-switcher></layer-switcher>
      </openlayers>

## Tests

To run the tests you'll need to install the dependencies via `npm`. In the root of the repository run:

    npm install

Then run the tests by opening [test/index.html](test/index.html) in a browser.

## License

All the hard work was done by Matt Walker and contributers in [ol3-layerswitcher](https://github.com/walkermatt/ol3-layerswitcher).
MIT (c) Matt Walker.

