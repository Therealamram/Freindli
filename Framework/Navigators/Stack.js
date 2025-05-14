import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../Screens/HomeScreen";
import { SignUp } from "../Screens/SignUp";
import { Login } from "../Screens/login";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}