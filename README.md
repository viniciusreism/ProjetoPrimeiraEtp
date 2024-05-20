Para o projeto de gasolina elaborado pelo aluno Vinicius R. os códigos estão dentro da pasta Gso. 
Para o projeto de IMC elaborado pelo aluno Mateus B. os códigos estão dentro da pasta Imc.

Para alterar o aplicativo dentro do Android Studio a configuração elaborada foi a seguinte:
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppIMCR from './AppIMCr'
import AppGas from './Appgas'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppGas);

Ao passar no iron function AppGas, o aplicativo que irá abrir é o de gasolina.
Ao passar o AppIMCR o aplicativo que irá abrir é o do calculo de IMC.
