import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View,Switch,TouchableOpacity, Image } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const DetailDevice = ({params,}) =>  {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getData().then((data) => (setItems(data)));
    }, []);

    const getData = async () => {
        const result = await fetch("http://localhost:8989/kitchen/get");
        const data = await result.json();
        console.log(data);
        return data;
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="home" size={64} color="orange" />
                <Text style={styles.txtTitle}> SMART HOME </Text>
            </View>
            <View style={styles.main}>
                {items.lights.map((item) => (
                    <View style={styles.itemBox} key={item.name}>
                        <Image source={{uri: require("../assets/"+item.image)}} style={styles.image} />
                        <View>
                            <Text style={styles.txtSubTitle1}>{item.name}</Text>
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.footer}>
                <Text style={styles.txtSubTitle1}> THCNTT </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#424242',
        justifyContent: 'flex-start',
    },
    txtHelloWorld: {
        fontSize: 50
    },
    header: {
        flex: 1,
        alignItems:'center',
        marginBottom: 40
    },
    footer: {
        flex: 1,
        alignItems:'center',
    },
    txtTitle: {
        fontSize: 40,
        fontStyle: 'bold',
        color: 'orange',
    },
    txtSubTitle: {
        fontSize: 30,
        fontStyle: 'bolder',
        color: '#FFF',
    },
    txtSubTitle1: {
        fontSize: 20,
        fontStyle: 'bold',
        color: '#FFF',
    },
    txtItem: {
        fontSize: 20,
        fontStyle: 'bold',
        color: '#424242',
        flex: 1
    },
    main: {
        flex: 5,
        alignItems: 'center',
        padding: 15,
    },
    item: {
        borderRadius: 5,
        height: 50,
        width: '100%',
        backgroundColor: '#eeeeee',
        marginBottom:5,
        marginTop:5,
        alignItems:'center',
        flexDirection: 'row',
        padding: 5
    },
    itemBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },  
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 40,
    },
});

export default DetailDevice;
