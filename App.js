import 'react-native-gesture-handler';

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { FAB } from 'react-native-paper';

import Active from './src/Active';
import Places from './src/Places';
import Geeks from './src/Geeks';
import PostDetails from './src/Posts/PostDetails';
import CreatePost from './src/Posts/CreatePost';


const Stack = createStackNavigator();

export default () => {
  return (
      <Navigation />
  )
}


export function Navigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='Active' component={Active} />
          <Stack.Screen name='Places' component={Places} />
          <Stack.Screen name='Geeks' component={Geeks} />
          <Stack.Screen name='PostDetails' component={PostDetails} />
          <Stack.Screen name='CreatePost' component={CreatePost} />
        </Stack.Navigator>
      </NavigationContainer>
  
  )
}




// export default function App() {
//   return (
//     <View style={{ flex: 1, flexDirection: 'column' }}>
//       <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#1A237E', '#3b5998', '#192f6a']} style={styles.linearGradient}>


//         <View style={{}}>
//           <LinearGradient start={{ x: 1, y: 0 }}
//             end={{ x: 0, y: 1 }} colors={['#1A237E', '#3b5998']}
//             style={{
//               justifyContent: 'space-between',
//               flexDirection: 'row', height: 60,
//               alignItems: 'center'
//             }}
//           >

//             <Image
//               style={styles.avatar}
//               source={require('./assets/images/mark.png')} />
//             <Image
//               style={styles.badge}
//               source={require('./assets/images/ham.png')} />
//             <View style={{ justifyContent: 'center' }}>
//               <Text style={{ fontSize: 18, fontWeight: 'bold', right: 45, color: "white" }}>Groups</Text>
//             </View>


//             <View style={{
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//               alignItems: 'center',
//               flex: .70
//             }}>
//               {/* <Image
//             style={{ width: 30, height: 30 }}
//             source={require('./assets/images/placeholder.png')} /> */}
//               <Icon name="search" size={20} color="white" />
//               <Icon name="envelope-o" size={20} color="white" />
//               <Icon name="bell-o" size={20} color="white" />
//               <Icon name="ellipsis-v" size={20} color="white" />
//             </View>
//           </LinearGradient>

//         </View>


//         <ImageBackground source={require('./assets/images/networks2.png')}
//           style={{}}>
//           <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 15 }}>
//             <Text style={{ fontSize: 18, fontWeight: 'normal', color: "white" }}>Access and manage your
//               <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }}> Groups</Text>
//             </Text>
//             <Text style={{ color: "white" }}>You have <Text style={{ fontSize: 18, fontWeight: 'bold' }}>5 </Text>Groups</Text>
//           </View>

//           <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
//             <Image
//               style={{ width: 62, height: 62, borderRadius: 62 / 2 }}
//               source={require('./assets/images/groups.png')} />
//           </View>

//           <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20 }}>
//             <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }}>What are Groups?</Text>
//             <Text style={{ fontSize: 14, fontWeight: 'normal', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: "white" }}>
//               Groups allow users and organisations to manage members and
//               offers shared by these members. The members of a group can
//               access all other members offers, creating a powerful
//               networking tools for those involved.
//             </Text>
//           </View>
//         </ImageBackground>



//         <Text style={{ color: '#90CAF9', padding: 10 }}>Promotional</Text>


//         <ScrollView>


//           <View style={{
//             backgroundColor: '#90CAF9',
//             height: 100, width: '100%',
//             borderTopLeftRadius: 40,
//             borderTopRightRadius: 40,
//             borderBottomLeftRadius: 40,
//             borderBottomRightRadius: 40,
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             alignItems: 'center'
//           }}>
//             <LinearGradient
//               start={{ x: 1, y: 0 }}
//               end={{ x: 0, y: 1 }} colors={['#1A237E', '#3b5998']}
//               style={styles.customGrad}>
//               <Image
//                 style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
//                 source={require('./assets/images/logo2.jpg')} />

//               <View style={{ right: 10 }}>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>The Refrra Community</Text>
//                 <Text>The place to go for support and rewards</Text>
//                 <Text style={{ color: '#9575CD' }}>24 members <Text style={{ color: 'green' }}>1 offers</Text> 1 claims</Text>
//                 <Text style={{ color: 'white' }}>$60 revenue generated</Text>
//               </View>
//             </LinearGradient>

//           </View>



//           <Text style={{ color: '#90CAF9', padding: 10 }}>A</Text>

//           <View style={{
//             backgroundColor: '#90CAF9', height: 100, width: '100%',
//             borderTopLeftRadius: 40,
//             borderTopRightRadius: 40,
//             borderBottomLeftRadius: 40,
//             borderBottomRightRadius: 40,
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             alignItems: 'center',
//             marginTop: 8,
//             marginBottom: 8
//           }}>
//             <LinearGradient
//               start={{ x: 1, y: 0 }}
//               end={{ x: 0, y: 1 }} colors={['#1A237E', '#3b5998']}
//               style={styles.customGrad}>
//               <Image
//                 style={{ width: 60, height: 60, borderRadius: 60 / 2, right: 10 }}
//                 source={require('./assets/images/mark.png')} />

//               <View style={{ right: 60 }}>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>AT Mutual ppertunities</Text>
//                 <Text>Raise the roof</Text>
//                 <Text style={{ color: '#9575CD' }}>3 members <Text style={{ color: 'green' }}>1 offers</Text> 1 claims</Text>
//                 <Text style={{ color: 'white' }}>$300 revenue generated</Text>
//               </View>
//             </LinearGradient>

//           </View>

//           <Text style={{ color: '#90CAF9', padding: 10 }}>B</Text>


//           <View style={{
//             backgroundColor: '#90CAF9', height: 100, width: '100%',
//             borderTopLeftRadius: 40,
//             borderTopRightRadius: 40,
//             borderBottomLeftRadius: 40,
//             borderBottomRightRadius: 40,
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             alignItems: 'center',
//             marginTop: 8,
//             marginBottom: 8
//           }}>
//             <LinearGradient
//               start={{ x: 1, y: 0 }}
//               end={{ x: 0, y: 1 }} colors={['#1A237E', '#3b5998']}
//               style={styles.customGrad}>
//               <Image
//                 style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
//                 source={require('./assets/images/logo3.png')} />

//               <View style={{ right: 20 }}>
//                 <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>B2B Sunshine Coast</Text>
//                 <Text numberOfLines={1} ellipsizeMode='tail'>A networking and referal group for b2b</Text>
//                 <Text style={{ color: '#9575CD' }}>24 members <Text style={{ color: 'green' }}>1 offers</Text> 1 claims</Text>
//                 <Text style={{ color: 'white' }}>$60 revenue generated</Text>
//               </View>
//             </LinearGradient>

//           </View>

//         </ScrollView>


//         <View style={{
//           backgroundColor: '#1A237E',
//           justifyContent: 'space-around',
//           flexDirection: 'row',
//           height: 60,
//           alignItems: 'center'
//         }}>

//           <Image
//             style={styles.customStyle}
//             source={require('./assets/images/groups.png')} />
//           <Image
//             style={styles.customStyle}
//             source={require('./assets/images/offers.png')} />
//           <View style={{ width: 85, height: 85, backgroundColor: "#1A237E", borderRadius: 85 / 2 }}>
//             <Image
//               style={{
//                 width: 50,
//                 height: 50,
//                 top: 5,
//                 left: 18,
//                 borderColor: "#7986CB",
//                 // borderTopLeftRadius: 80,
//                 // borderTopRightRadius: 80,
//                 // borderRightWidth: 20
//               }}
//               source={require('./assets/images/pay-claim.png')} />
//           </View>
//           <Image
//             style={styles.customStyle}
//             source={require('./assets/images/partners.png')} />
//           <Image
//             style={styles.customStyle}
//             source={require('./assets/images/leads.png')} />


//           {/* <View style={{
//           flexDirection: 'row',
//           justifyContent: 'space-around',
//           alignItems: 'center',
//           flex: .70
//         }}>
//           <Icon name="search" size={20} color="white" />
//           <Icon name="envelope-o" size={20} color="white" />
//           <Icon name="bell-o" size={20} color="white" />
//           <Icon name="ellipsis-v" size={20} color="white" />
//         </View> */}

//         </View>


//         <FAB style={styles.fab}
//             label="Create Group"
//             small
//             icon="plus"
//             onPress={() => console.log('Pressed')} />


//       </LinearGradient>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    // backgroundColor: 'black',
    width: 50,
    height: 50,
  },
  badge: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    left: -40,
    top: 16,
    borderRadius: 25 / 2
  },
  customStyle: {
    width: 30,
    height: 30,
  },
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
  },
  customGrad: {
    // backgroundColor: '#90CAF9',
    height: 100, width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 65,
    backgroundColor: '#1A237E'
  },
});