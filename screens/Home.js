import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

import { images } from '../assets/images'
const members = require('../data/members.json');

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    { members.map((member) => {
                        return (
                            <TouchableOpacity
                                key={member.id}
                                style={styles.card}
                                onPress={() => { navigation.navigate('Détails', {name: member.name, image: member.image})} }
                            >
                                <Image
                                    style={styles.logo}
                                    source={images[member.image]}
                                />
                                <Text style={styles.elementText}>{member.name}</Text>
                            </TouchableOpacity>
                        );
                    }) }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 60,
        height: 60,
    },
    card: {
        marginTop: 12,
        padding: 18,
        backgroundColor: '#F0F0F0',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        width: Dimensions.get('window').width - 12 * 2
    },
    elementText: {
        fontSize: 18,
        marginLeft: 14,
    }
});

export default Home;
