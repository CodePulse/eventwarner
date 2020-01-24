import React, {Component} from 'react';
import {View, Text, Stylesheet, StyleSheet, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements'

class EventListItem extends Component {
    render() {
        return (
            <View style={styles.eventItem}>
                <View><Icon
                    name='clock' /></View>
                <View>
                    <Text style={styles.textStyle}>{this.props.detail.date}</Text>
                    <Text style={styles.textStyleMute}>{this.props.detail.event} - {this.props.detail.start_time}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    eventItem: {
        color: 'white',
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,1)',
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        width: 350,
        borderRadius: 20,
        flex: 1, flexDirection: 'row'
    },
    textStyle: {
        color: '#000',
        fontSize: 18,
        fontFamily: 'montserrat-bold',
    },
    textStyleMute: {
        color: '#3c3c3c',
        fontSize: 13,
        fontFamily: 'montserrat',
        textTransform: 'uppercase',
    },
    contentContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default EventListItem;
