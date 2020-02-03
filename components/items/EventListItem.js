import React, {Component} from 'react';
import {View, Text, Stylesheet, StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements'

class EventListItem extends Component {
    render() {
        return (
            <View style={styles.eventItem}>
                <View style={styles.eventIcon}><Icon name='calendar' type='font-awesome' color='#231f40'/></View>
                <View style={styles.eventBody}>
                    <Text style={styles.textStyle}>{this.props.detail.date}</Text>
                    <View style={styles.eventTimeLoc}>
                        <Icon name='clock-o' type='font-awesome' color='#76f4d4'/>
                        <Text style={styles.textStyleMute}>{this.props.detail.event} - {this.props.detail.start_time}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    eventItem: {
        color: 'white',
        marginBottom: 20,
        backgroundColor: 'rgba(48,45,80,1)',
        paddingLeft: 5,
        // paddingBottom: 10,
        width: 350,
        height: 60,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row'
    },
    eventTimeLoc: {
        flexDirection: 'row'
    },
    eventBody: {
        marginLeft: 15,
        justifyContent: 'center',

    },
    eventIcon: {
        marginTop: 5,
        backgroundColor: '#76f4d5',
        borderRadius: 10,
        padding: 10,
        width: 50,
        justifyContent: 'center',
        height: 50,
    },
    textStyle: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'SFProDisplay_bold'
    },
    textStyleMute: {
        color: '#9897a4',
        fontSize: 15,
        marginLeft: 5,
        fontFamily: 'SFProDisplay_regular',
        width: 258,
    },
    contentContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default EventListItem;
