import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

// const markersData = [{
//     id: 1,
//     latitude: 25.435801,
//     longitude: 81.846313,
//     title: "Best Place",
//     description: "This is the best place in Portland"
// },
// {
//     id: 2,
//     latitude: 18.458730,
//     longitude: 73.876360,
//     title: "Second Best Place",
//     description: "This is the second best place in Portland"
// },
// {
//     id: 3,
//     latitude: 28.613939,
//     longitude: 77.209023,
//     title: "Third Best Place",
//     description: "This is the third best place in Portland"
// }];

export default function Places() {

    const [locationData, setLocationData] = useState([]);

    useEffect(() => {
        fetch('https://run.mocky.io/v3/82f1d43e-2176-4a34-820e-2e0aa4566b5c')
            .then((response) => response.json())
            .then((responseJson) => {
                setLocationData(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    const mapMarkers = () => {
        return locationData.map((markerData) => <Marker
            key={markerData.id}
            coordinate={{ latitude: markerData.latitude, longitude: markerData.longitude }}
            title={markerData.title}
            description={markerData.short_desc}
        >
        </Marker >
        )
    }


    return (
        <MapView
            style={styles.mapStyle}
            showsUserLocation={false}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
                latitude: 28.5245,
                longitude: 77.1855,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >

            {mapMarkers()}

        </MapView>

    );
}
const styles = StyleSheet.create({
    MainContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});