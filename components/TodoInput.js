import React, { useState } from 'react';
import { View, Button, Modal, TextInput, StyleSheet } from 'react-native';

const TODO_TEXT_PLACEHOLDER = 'Add Todo';
const TODO_BUTTON_PLACEHOLDER = 'Add a New Todo Item';


function TodoInput(props) {
    const [todoItemText, setTodoItemText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const todoAdd = () => {
        if (todoItemText){
            switchVisibility();
            setTodoItemText('')
            props.addTodo(todoItemText);
        }
    }

    const switchVisibility = () => setIsVisible(!isVisible); 


    return (
        <View style={styles.wrapModel}>
            {
                !isVisible && <Button
                    title={TODO_BUTTON_PLACEHOLDER}
                    style={styles.buttonContainer}
                    onPress={switchVisibility}
                />
            }

            <Modal visible={isVisible} style={styles.wrapModel}>
                <View style={styles.wrapInput}>
                    <TextInput
                        style={styles.inputBox}
                        value={todoItemText}
                        onChangeText={setTodoItemText}
                        placeholder={TODO_TEXT_PLACEHOLDER}
                    />
                </View>
                <View style={styles.wrapInput}>
                    <Button
                        title="Confirm"
                        onPress={todoAdd}
                    />
                    <Button
                        title="Cancel"
                        onPress={switchVisibility}
                    />
                </View>
            </Modal>

        </View>
    )
};

const styles= StyleSheet.create({
    wrapInput: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        justifyContent: 'space-between',
        height: 80
    },
    wrapModel: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        borderColor: 'green'
    },
    buttonContainer: {
        width: 300,
        backgroundColor: '#000',
        color: '#000'
    }
})

export default TodoInput;