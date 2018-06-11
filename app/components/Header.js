/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../images/icon.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Shopping Cart</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        marginTop: 20,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: Dimensions.get('window').width,
        borderBottomWidth: 4,
        borderBottomColor: '#CCC',

    },
    logo: {
        width: 40,
        height: 40,
        marginTop: 20,
    },
    title: {
        marginTop: 20,
        marginLeft: 10,
        color: '#c1c1c1',
        fontWeight: 'bold',
        fontSize: 15,
        fontStyle: 'italic',
    },
});
