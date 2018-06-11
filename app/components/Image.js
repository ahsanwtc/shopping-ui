/* @flow */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image as ReactImage
} from 'react-native';

export default class Image extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ReactImage
                    source={this.props.source}
                    style={styles.image}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
