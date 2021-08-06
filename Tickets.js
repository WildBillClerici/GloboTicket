import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import globoTickets from './TicketsDB';

const Tickets = () => {
    const ticketItem = ({item}) => {
        return (
            <View style={styles.tickets}>
                <View>
                    <Image
                        style={styles.img}
                        source={item.image}
                    />
                </View>
                <View>
                    <Text style={styles.tickettitle}>
                        {item.event}
                    </Text>
                    <Text style={styles.ticketshortdescription}>
                        {item.shortDescription}
                    </Text>
                    <Text
                        style={styles.ticketdescription}
                        numberOfLines={2}
                        ellipsizeMode='tail'
                    >
                        {item.description}
                    </Text>
                    <Text style={styles.ticketshortdescription}>
                        Price: {item.price}
                    </Text>
                </View>
                <View style={styles.ticketbuttoncontainer}>
                    <Text style={styles.ticketbutton}>
                        GET TICKETS
                    </Text>
                </View>
            </View>
        );
    };

    return(
        <View>
            <View style={styles.container}>
                <FlatList
                    data={globoTickets}
                    renderItem={ticketItem}
                    keyExtractor={(item) => item.eventId}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    tickets: {
        flexDirection: 'column'
    },
    img: {
        width: '100%',
        resizeMode: 'stretch'
    },
    tickettitle: {
        fontFamily: 'Ubuntu-Regular',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    ticketshortdescription: {
        fontFamily: 'Ubuntu-light',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 5
    },
    ticketdescription: {
        fontFamily: 'Ubuntu-light',
        fontWeight: '600',
        padding: 15
    },
    ticketbuttoncontainer: {
        borderBottomWidth: 1,
        paddingTop: 15,
        paddingBottom: 5
    },
    ticketbutton: {
        fontSize: 18,
        fontFamily: 'Ubuntu-Regular',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Tickets;