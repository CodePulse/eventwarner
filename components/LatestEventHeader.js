import React, {Component} from 'react';
import {View, Text, Stylesheet, StyleSheet} from 'react-native';

class EventListItem extends Component {
    render() {
        return (
            <View style={styles.eventItem}>
                <Text style={styles.textStyle}>{this.props.detail.date}</Text>
                <Text color='#ffffff'>{this.props.detail.event} - {this.props.detail.start_time}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    eventItem: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginBottom: 20,
        backgroundColor: '#ccc',
        padding:10,
        width: 300,
        borderRadius: 5
    },
    textStyle: {
        color: 'white',
        fontSize:20,
    }
});

export default EventListItem;
