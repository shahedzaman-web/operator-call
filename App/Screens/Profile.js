import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import { Ionicons,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Screen from '../components/Screen';



const Profile = () => {
    const navigation = useNavigation();
    return (
        <Screen>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back-sharp" size={24} color="#005a97" />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
        <Image source={require('./../assets/avater.jpg')} style={styles.avater}/>
        <AntDesign style={styles.icon} name="camera" size={32} color="black" />
    </View>
    <Text style={styles.titleText}>Priya Singh</Text>
            <View>
            <TouchableOpacity style={styles.box}>
            <Text style={styles.boxText}>Mobile Number</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
            <Text style={styles.boxText}>Broker</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
            <Text style={styles.boxText}>Amount of Trade</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Screen>
    )
}

export default Profile

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
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:2,
        borderColor:'#797d96'
    },boxText:{
        color:'#a3a2a2',
        fontSize:16,
        fontWeight:'bold'
    },linearBackground:{
        padding:16,
        paddingHorizontal:20,
        paddingVertical:60,
        borderRadius:24,
    },imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:40,
        marginTop:24,
        position:'relative',
    },avater:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:2,
        borderColor:'#b0b6c1'
    },icon:{
        position:'absolute',
        bottom:-10,
        right:140
    },titleText:{
        fontSize:36,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:20,
        color: "#070a35"
    }
})
// #66725a
//#a8d865
