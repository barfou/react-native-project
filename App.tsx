import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './src/HomePage';
import DetailsPage from './src/DetailsPage';
import DetailsLocationPage from "./src/DetailsLocationPage";
import DetailsEpisodePage from "./src/DetailsEpisodePage";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomePage}/>
                <Stack.Screen name="Details" component={DetailsPage}/>
                <Stack.Screen name="Location Details" component={DetailsLocationPage}/>
                <Stack.Screen name="Episode Details" component={DetailsEpisodePage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
