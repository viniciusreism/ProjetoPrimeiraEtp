/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './Appnew';
// import {name as appName} from './app.json';
// import Appnew from './Appnew';

// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import AppIMCR from './AppIMCr'
import AppGas from './Appgas'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppIMCR);