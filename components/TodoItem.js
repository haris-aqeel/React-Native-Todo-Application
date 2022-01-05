import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


function TodoItem(props) {
    return (
        <View style={styles.itemWrap}>
            <TouchableOpacity animation="fade" onPress={() => props.deleteTodo(props.item.item.id)}>
                <Text style={styles.textWrap}>{props.item.item.value}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    itemWrap: {
        backgroundColor: '#efefef',
        width: 350,
        padding: 15,
        borderRadius: 10,
        marginTop: 8
    },
    textWrap: {
        fontSize: 18,
    }
})

export default TodoItem;