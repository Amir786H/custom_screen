import React, { useState, useEffect } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Keyboard, TextInput, FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { FAB, Button, Modal, Portal, Provider } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export default function CreatePost(props) {
    const navigation = useNavigation();

    const [propsData, setPropsData] = useState([]);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState('1'); //As per requirement kept STATIC

    //New task
    // useEffect(() => {
    //     // https://jsonplaceholder.typicode.com/posts
    //     fetch(`https://jsonplaceholder.typicode.com/posts/3/comments`)
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             console.log('task3----->>>', responseJson)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, []);

    const titleFunc = (data) => {
        setTitle(data);
    }
    const messageFunc = (data) => {
        setMessage(data);
    }
    const idFunc = (data) => {
        setUserId(data);
    }

    const submitFunc = () => {
        // alert(title + '' + message + '' + userId);

        if(title == ''){
            alert('Enter valid title');
        }
        if(message == ''){
            alert('Enter valid message');
        }
        if(userId == ''){
            alert('Enter valid userId');
        }
        else{
            postData();
        }
    }

    const postData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            // Adding body or contents to send
            body: JSON.stringify({
                title: title,
                body: message,
                userId: userId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            // Converting to JSON
            .then(response => response.json())
            // Displaying results to console
            .then(json => 
                navigation.navigate('Active')
            );
    }


    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>

            <View style={{ justifyContent: 'center' }}>
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#f7be54', '#ff7002']}
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        height: 60,
                        alignItems: 'center',
                        padding: 10
                    }}
                >
                    <View>
                        <Icon name="chevron-left" size={20} color="white" style={{}} onPress={() => navigation.goBack()} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white", right: 20 }}>Create Post</Text>
                    </View>

                </LinearGradient>

                <View style={{ justifyContent: 'center' }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        value={title}
                        onChangeText={(text) => titleFunc(text)}
                        onFocus={() => {
                            // setClicked(true);
                        }}
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Message"
                        value={message}
                        onChangeText={(text) => messageFunc(text)}
                        onFocus={() => {
                            // setClicked(true);
                        }}
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Id"
                        value={userId}
                        onChangeText={(text) => idFunc(text)}
                        onFocus={() => {
                            // setClicked(true);
                        }}
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity onPress={() => submitFunc()}>
                    <View style={{
                        width: 80,
                        height: 40,
                        backgroundColor: 'orange',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginVertical: 10
                    }}>
                        <Text>submit</Text>
                    </View>
                </TouchableOpacity>

            </View>


            <View>

            </View>

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
    },
    customGrad: {
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
});