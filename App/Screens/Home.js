import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';




const Home = () => {
    const navigation = useNavigation();
    return (
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
        <TouchableOpacity onPress={() => navigation.navigate("FreeMembership")}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#fa963a', '#7e532c']}
        style={styles.linearBackground}
      >
        <Text style={{color: 'white',textAlign: 'center',fontSize:28,fontWeight: '600'}}>Free</Text>
        <Text style={{color: 'white',textAlign: 'center',fontSize:16}}>Membership</Text>
    </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PaidMembership")}>
    <LinearGradient
    // Background Linear Gradient
    colors={['#66725a', '#a8d865']}
    style={styles.linearBackground}
  >
    <Text style={{color: 'white',textAlign: 'center',fontSize:28,fontWeight: '600'}}>Paid</Text>
    <Text style={{color: 'white',textAlign: 'center',fontSize:16}}>Membership</Text>
</LinearGradient>
</TouchableOpacity>
    </View>
            <View>
            <View style={styles.box}>
            <Text style={styles.boxTitle}>Today's Opinions</Text>
            <View style={[styles.row,styles.my12]}>
            <FontAwesome name="user-circle" size={50} color="white" />
           <View style={styles.textContainer}> 
           
           <Text style={styles.boxText}>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</Text></View>
            </View>
            <View style={[styles.row,styles.my12]}>
            <FontAwesome name="user-circle" size={50} color="white" />
           <View style={styles.textContainer}> 
           
           <Text style={styles.boxText}>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</Text></View>
            </View>
            <View style={[styles.row,styles.my12]}>
            <FontAwesome name="user-circle" size={50} color="white" />
           <View style={styles.textContainer}> 
           
           <Text style={styles.boxText}>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</Text></View>
            </View>
            <View style={[styles.row,styles.my12]}>
            <FontAwesome name="user-circle" size={50} color="white" />
           <View style={styles.textContainer}> 
           
           <Text style={styles.boxText}>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</Text></View>
            </View>
            </View>
         
           
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        marginTop:36,
        marginHorizontal:10
    },
    row:{
        flexDirection: 'row',
    },spaceBetween:{
        justifyContent: 'space-between',
    },mx12:{
        marginHorizontal:12
    },box:{
        backgroundColor:'#080935',
        height: '80%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:24,
    },boxTitle:{
        color:'#fff',
        fontSize:28,
        fontWeight:'400',
        paddingVertical:24,
    },linearBackground:{
        padding:16,
        paddingHorizontal:20,
        paddingVertical:60,
        borderRadius:24,
        marginHorizontal:12,
    },card:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:40,
        marginTop:24,
    },boxText:{
        color:'#fff',
    },textContainer:{
        width:'90%',
        marginLeft:12,
    },my12:{
        marginVertical:12
    }
})
// #66725a
//#a8d865
