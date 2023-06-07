import React, { useState, useEffect } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Keyboard, TextInput, FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { FAB, Button, Modal, Portal, Provider } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export default function PostDetails(props) {
    const navigation = useNavigation();

    const [propsData, setPropsData] = useState([]);
    const [comm, setComments] = useState([]);
    const [commentsValue, setCommentsValue] = useState([]);

    //New task
    useEffect(() => {
        const testId = props.route.params.itemData.id
        console.log(testId)
        // console.log(`https://jsonplaceholder.typicode.com/posts/${testId}/comments`)
        fetch(`https://jsonplaceholder.typicode.com/posts/${testId}/comments`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('task2', responseJson)
                console.log('props data---->>', props.route.params.itemData)
                setComments(responseJson);
                setPropsData(props.route.params.itemData);
                // alert(typeof(comm))
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    const CoomentsView = ({ item }) => {
        return (
            <View style={{
                backgroundColor: '#fff',
                height: 250,
                justifyContent: 'center',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text><Text style={{ fontWeight: 'bold' }}>Name:</Text> {item.name}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Email:</Text> {item.email}</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>Body:</Text> {item.body}</Text>
                </View>
            </View>
        )
    }


    const ItemViewNew = () => {
        return (

            <View style={{
                backgroundColor: '#fff',
                height: 250,
                justifyContent: 'center',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
            }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            height: 40, width: 40,
                            borderRadius: 40 / 2,
                            backgroundColor: "orange",
                            justifyContent: 'center', alignItems: 'center'
                        }} >
                            <Text style={{ fontSize: 18 }}>{propsData.id}</Text>
                        </View>
                        <View style={{ marginHorizontal: 10, justifyContent: 'center', paddingRight: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{propsData.title}</Text>
                            <Text style={{ fontWeight: 'normal', fontSize: 16, marginVertical: 5, width: '70%' }}>{propsData.body}</Text>
                        </View>
                    </View>
                </View>

                {/* <View style={{ flexDirection: 'column', backgroundColor: 'pink' }}> */}
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#f7be54', '#ff7002']}
                    style={{
                        flexDirection: 'column'
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Comments:</Text>
                </LinearGradient>
                {/* </View> */}

            </View>
        );
    };



    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>

            <View style={{}}>
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#f7be54', '#ff7002']}
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row', height: 60,
                        alignItems: 'center',
                        padding: 10
                    }}
                >

                    <View>
                        <Icon name="chevron-left" size={20} color="white" style={{}} onPress={() => navigation.goBack()} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white", right: 20 }}>Post Details</Text>
                    </View>

                </LinearGradient>

            </View>


            <View>
                {ItemViewNew()}
                <FlatList
                    data={comm}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={CoomentsView}
                />
            </View>

            <FAB style={styles.fab}
                    // label="Create Group"
                    large
                    icon="plus"
                    onPress={() => navigation.navigate('CreatePost')} />
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