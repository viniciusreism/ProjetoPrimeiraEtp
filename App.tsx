//------------------------------  stack -----------------------------------
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import Tela1 from './scr/components/Tela1';
// import Tela2 from './scr/components/Tela2';
// const navStack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <navStack.Navigator>
//         <navStack.Screen name='TelaInicial' component={Tela1} />
//         <navStack.Screen name='TelaSecundaria' component={Tela2} />
//       </navStack.Navigator>
//     </NavigationContainer>
//   )
// }
//
//
//
//------------------------------  bottom -----------------------------------

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tela3 from './scrbottom/components/Tela3';
import Tela4 from './scrbottom/components/Tela4';
import { Icon } from 'react-native-elements';
const navBottom = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <navBottom.Navigator>
        <navBottom.Screen
          name='Lista'
          component={Tela3}
          options={{
            tabBarIcon: () => {
              return (<Icon name='church' size={30} color='green' />)
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
          }} />
        <navBottom.Screen
          name='Cadastro'
          component={Tela4}
          options={{
            tabBarIcon: () => {
              return (<Icon name='church' size={30} color='green' />)
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
          }}
        />
      </navBottom.Navigator>
    </NavigationContainer>
  )
}