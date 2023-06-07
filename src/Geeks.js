import React, { useState, useEffect } from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity, Keyboard, TextInput, FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { FAB, Button, Modal, Portal, Provider } from 'react-native-paper';

// import { useNavigation } from '@react-navigation/native';

export default function Geeks({navigation}) {

    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [expand, setExpand] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showGeeks, setShowGeeks] = useState(false);
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [statusDataSource, setStatusDataSource] = useState([]);

    const [geeksDataSource, setGeeksDataSource] = useState([]);   //Geeks

    // const containerStyle = { backgroundColor: 'white', padding: 20 };

    //Old
    useEffect(() => {
        fetch('https://run.mocky.io/v3/82f1d43e-2176-4a34-820e-2e0aa4566b5c')
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
                setStatusDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    const statusFilterFunction = (text) => {
        setShowModal(!showModal);
        console.log(text)
        if (text) {
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.status
                        ? item.status.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    // console.log(itemData)
                    return itemData.indexOf(textData) > -1;
                });
            setStatusDataSource(newData);
            setSearch(text);
        } else {
            setStatusDataSource(masterDataSource);
            setSearch(text);
        }
    }

    const searchFilterFunction = (text) => {

        // Check if searched text is not blank
        if (text) {
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    // console.log(textData)
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const timeSchedule = () => {
        const myDate = new Date();
        const hour= myDate.getHours();
        console.log(hour);
    }

    const newItemView = ({item}) => {
        return(
            <View style={{
                backgroundColor: '#fff',
                height: 250,
                justifyContent: 'center',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
            }}>

            </View>
        )
    }

    const ItemView = ({ item }) => {
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

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{
                            height: 40, width: 40,
                            borderRadius: 40 / 2,
                            backgroundColor: "orange",
                            justifyContent: 'center', alignItems: 'center'
                        }} >
                            <Text style={{ fontSize: 18 }}>{item.id}</Text>
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.title.toUpperCase()} {item.subtitle.toUpperCase()}</Text>
                            <Text style={{ fontWeight: 'normal', fontSize: 14 }}>{item.status}</Text>
                        </View>
                    </View>
                    <View>
                        <Button mode="contained" uppercase={false}
                            color={'#FDBA74'}
                            style={{ borderRadius: 40, height: 40 }}>
                            Assigned
                        </Button>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    padding: 10,
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    borderColor: '#BDBDBD'
                }}>
                    <Icon name="calendar" size={20} color="#BDBDBD" />
                    <Text style={{ color: '#BDBDBD', left: 15 }}>Created: <Text style={{ color: 'black', fontWeight: 'bold' }}>{item.created}</Text></Text>
                </View>

                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Icon name="list-ul" size={20} color="#BDBDBD" />
                    <Text numberOfLines={2} ellipsizeMode='tail' style={{ flex: 1, color: '#BDBDBD', left: 15 }}>{item.short_desc}</Text>
                </View>

                {expand &&
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Icon name='calendar-check-o' size={20} color="#BDBDBD" />
                        <Text numberOfLines={2} ellipsizeMode='tail' style={{ flex: 1, color: '#BDBDBD', left: 15 }}>{item.long_desc}</Text>
                    </View>
                }

                <TouchableOpacity onPress={() => {
                    setExpand(!expand);
                }} >
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='angle-down' size={20} color="#BDBDBD" onPress={() => {
                            setExpand(!expand);
                        }} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 10,
                    width: '100%',
                    backgroundColor: '#F5F5F5',
                }}
            />
        );
    };


    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };


    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>

            <View style={{}}>
                <LinearGradient
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['#f7be54', '#ff7002']}
                    style={{
                        justifyContent: 'space-around',
                        flexDirection: 'row', height: 60,
                        alignItems: 'center'
                    }}
                >

                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }}>Assigned to Me</Text>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        flex: .60
                    }}>
                        <Icon name="refresh" size={20} color="white" style={{ marginRight: 35 }} />
                        <Icon name="map-marker" size={20} color="white" onPress={() => navigation.navigate('Places')} />
                    </View>
                </LinearGradient>

            </View>


            <View style={{
                margin: 15,
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
                width: "90%",
            }}>
                <View
                    style={styles.searchBar__clicked}
                >
                    <Icon name="search" size={20} color="white" style={{ marginLeft: 1 }} />

                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        value={search}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onFocus={() => {
                            setClicked(true);
                        }}
                        autoCorrect={false}
                    />
                    {/* cross Icon, depending on whether the search bar is clicked or not */}
                    {clicked && (
                        <Icon name="remove" size={20} color="black" style={{ padding: 1, right: 5 }} onPress={() => {
                            searchFilterFunction("")
                        }} />
                    )}
                </View>
                {/* cancel button, depending on whether the search bar is clicked or not */}

                <View style={{ left: 12 }}>
                    <Button contentStyle={{ flexDirection: 'row-reverse' }}
                        icon="filter" color="orange"
                        uppercase={false}
                        mode="contained" onPress={() => {
                            setShowModal(!showModal);
                            Keyboard.dismiss();
                            setClicked(false);
                        }}>
                        Filter
                    </Button>
                </View>

            </View>

            <View>
                {showModal ?
                    <FlatList
                        data={statusDataSource}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                    />
                    :
                    <FlatList
                        data={filteredDataSource}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                    />
                }
            </View>


            <Provider>
                <Portal>
                    <Modal visible={showGeeks}
                        onDismiss={setShowGeeks}
                        contentContainerStyle={styles.modalNew}>
                        <View>
                            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <Text style={{ color: 'black', bottom: 40 }}>Choose option from below:</Text>
                            </View>

                            <View style={{ bottom: 0 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ color: 'black' }}>Assigned to me</Text>
                                    <Icon name="angle-right" size={20} color="black" style={{ marginLeft: 50, marginRight: 25 }} />
                                </View>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                                        <Text style={{ color: 'black' }}>Status</Text>
                                        <Icon name="angle-right" size={20} color="black" style={{ marginLeft: 50, marginRight: 25 }} />
                                    </View>
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={{ color: 'black' }}>Unassigned</Text>
                                    <Icon name="angle-right" size={20} color="black" style={{ marginLeft: 50, marginRight: 25 }} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </Portal>
            </Provider>

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