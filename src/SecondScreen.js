import React, { useState, useEffect } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Keyboard, TextInput, FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { FAB, Button, Modal, Portal, Provider } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export default function SecondScreen({navigation}) {

    const [clicked, setClicked] = useState(false);

    // const containerStyle = { backgroundColor: 'white', padding: 20 };

    // useEffect(() => {
    //     fetch('https://run.mocky.io/v3/82f1d43e-2176-4a34-820e-2e0aa4566b5c')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             // console.log(responseJson)
    //             setFilteredDataSource(responseJson);
    //             setMasterDataSource(responseJson);
    //             setStatusDataSource(responseJson);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);


    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>

            <View style={{}}>
               
            </View>


            <FAB style={styles.fab}
                    large
                    icon="plus"
                    onPress={() => console.log('Pressed')} />

        </View>
    )
}

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
        backgroundColor: 'orange'
    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 4,
        flexDirection: "row",
        width: "70%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        top: 5,
        height: 40,
        width: "80%",
        alignItems: 'center',
        textAlign: 'left',
        justifyContent: 'center'
    },
    modal: {
        flex: 1,
        // height: 20,
        // width: 200,
        // right: 75,
        // left: 75,
        // top: 180,
        // bottom: 100,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'yellow'
        // padding: 100,
    },
    modalNew: {
        height: 250,
        width: 250,
        right: 75,
        left: 75,
        top: 20,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0E0E0',
        // padding: 100,
    }
});