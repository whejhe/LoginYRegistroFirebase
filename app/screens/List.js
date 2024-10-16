import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const List = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>List</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Details')}>
                <Text style={styles.text}>Ver detalles</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => FIREBASE_AUTH.signOut()}>
                <Text style={styles.text}>Logout</Text>
            </Pressable>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8087F0',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    button:{
        padding: 10,
        backgroundColor: '#323446',
        borderRadius: 8,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#F0D262',
        width: 250
    },
    text:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title:{
        color: '#fff',
        fontFamily: 'monospace',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10

    }
    
});

export default List;