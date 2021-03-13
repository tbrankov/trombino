import React from 'react';
import { StyleSheet, Text, View, Button, Image, Linking } from 'react-native';
import { images } from "../assets/images";

const Details = ({ route }) => {
    const name = route.params.name;
    const email = (name.charAt(0) + name.substr(name.indexOf(' ') + 1) + '@juniorisep.com').toLowerCase()

    return (
        <View style={ styles.container }>
            <Image style={styles.profile}
                   source={images[route.params.image]}
            />
            <Text style={styles.largeTitle}>{name}</Text>
            <Button /*color='#22CC10'*/
                    onPress={() => Linking.openURL('mailto:' + email)}
                    title={email}
            />
            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </View>
    )
};

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 12
    },
    profile: {
        width: 120,
        height: 120,
        margin: 24
    },
    largeTitle: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    paragraph: {
        fontSize: 16,
        paddingTop: 24
    }
});
