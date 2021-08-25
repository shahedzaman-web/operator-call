import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Screen from '../components/Screen';


const PaidMembership = () => {
    const navigation = useNavigation();

    return (
        <Screen>
        <View style={styles.container}>
        <View style={[styles.row, styles.spaceBetween]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back-sharp" size={24} color="#005a97" />
        </TouchableOpacity>
        <View style={styles.row}>
        <Ionicons name="md-notifications-sharp" size={24} color="#005a97" />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <FontAwesome style={styles.mx12} name="user" size={24} color="#005a97" />
        </TouchableOpacity>
        </View>
       
        </View>
        <View style={styles.card}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#66725a', '#a8d865']}
        style={styles.linearBackground}
      >
        <Text style={{color: 'white',textAlign: 'center',fontSize:28,fontWeight: '600'}}>Paid</Text>
        <Text style={{color: 'white',textAlign: 'center',fontSize:16}}>Membership</Text>
    </LinearGradient>
    </View>
            <View>
            <View style={styles.box}>
            <Text style={styles.boxText}>Stack Cash</Text>
            <Text style={styles.boxText}>$999</Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.boxText}>Stack F&O</Text>
            <Text style={styles.boxText}>$1999</Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.boxText}>Index F&O</Text>
            <Text style={styles.boxText}>$2499</Text>
            </View>
            </View>
        </View>
        </Screen>
    )
}

export default PaidMembership

const styles = StyleSheet.create({
    container:{
        marginTop:32,
        marginHorizontal:12
    },
    row:{
        flexDirection: 'row',
    },spaceBetween:{
        justifyContent: 'space-between',
    },mx12:{
        marginHorizontal:12
    },box:{
        marginVertical:12,
        backgroundColor:'#080935',
        padding:16,
        paddingHorizontal:20,
        borderRadius:30,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth:2,
        borderColor:'#797d96'
    },boxText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },linearBackground:{
        padding:16,
        paddingHorizontal:20,
        paddingVertical:60,
        borderRadius:24,
    },card:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:40,
        marginTop:24,
    }
})
// #66725a
//#a8d865
