import React, { useState } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import Input from '../components/Input'
import Screen from '../components/Screen';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [ProfileName, setProfileName] = useState("Username");
    const [password, setPassword] = useState("");
    return (
        <Screen>
        <View style={styles.container}>
            <View style={styles.center}>
            <Image source={require('../assets/M_Logo.png')} style={styles.logo} />
            </View>
            <Input placeholder="Profilename" 
            autoCapitalize="none"
            autoCorrect={false}
            value={ProfileName}
            textContentType="username"
            />
            <Input placeholder="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            />
          <View style={styles.center}>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Home')}
          >
          <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          </View>

        </View>
        </Screen>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
    },center:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },button:{
        backgroundColor: '#005a97',
        paddingHorizontal: 28,
        paddingVertical: 10,
        borderRadius: 10,
    },buttonText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },logo:{
        width: 240,
        height: 240,
        resizeMode: 'contain',
    }
})
