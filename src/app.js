import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  message: {
    value: 'Hello World!',
    serialize: false
  },
  title: {
    value: 'using-babylon',
    serialize: false
  },
  isServer: {
    value: System.isPlatform( "server" ),
    serialize: false
  }
});

export default AppViewModel;
