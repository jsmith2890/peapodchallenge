import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AllUsers from '../screens/AllUsers';
import UserShow from '../screens/UserShow';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen
          name="UserList"
          component={AllUsers}
          options={{title: 'Users'}}
        />
        <Stack.Screen name="UserShow" component={UserShow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
