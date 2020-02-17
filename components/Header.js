import React, {Component} from 'react';
import {View, Text, Stylesheet, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

class Header extends Component {
    render() {
        return (
            <View style={styles.headerWrapper}>
                <View style={styles.header}>
                    <Text style={styles.textStyleMute}>Haringey, Tottenham</Text>
                    <Text style={styles.textStyle}>Event Traffic Warner</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapper: {
        width: width,
        backgroundColor: '#302950',
        borderRadius: 20,
        flexDirection: 'row',
        height: 140,
        paddingTop: 50,
        // paddingLeft: 20,
    },
    headerMenu: {
        width: 50,
    },
    header: {
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyleMute: {
        color: '#848192',
        fontSize: 20,
        fontFamily: 'SFProDisplay_medium'
    },
    textStyle: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: 'SFProDisplay_heavy'
    }
});

export default Header;
