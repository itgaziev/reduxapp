import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { ActionType } from './models/types'

const TaskScreen = (props) => {
    const {route, navigation } = props
    const [ name, setName ] = React.useState("")

    const createTask = () => {
        props.addTask(name)
        navigation.navigate("Home")
    }
    return (
        <View style={ styles.container }>
            <Text style={ styles.titleHeader }>Создать задачу</Text>

            <TextInput
                style={ styles.input }
                onChangeText={ setName }
                value={name}
                placeholder="Название задачи"
            />

            <TouchableOpacity style={ styles.btnCreate } onPress={() => createTask() }>
                <Text style={ styles.btnText }>Создать задачу</Text>
            </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = (state) => ({ tasks : state.tasks })
const mapDispatchToProps = (dispatch) => ({
    addTask: (name) => {
        dispatch({
            type: ActionType.ADD_TASK,
            payload: {
                id : name, 
                name : name
            }
        })
    }
})

const connectComponent = connect(mapStateToProps, mapDispatchToProps)

export default connectComponent(TaskScreen)

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    titleHeader : {
        fontSize: 22,
        marginTop: 15,
        marginBottom: 15,
        textAlign: 'center'
    },
    btnCreate : {
        backgroundColor: 'blue',
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    btnCreate : {
        marginTop: 25,
        backgroundColor: 'blue',
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    btnText : {
        color: '#FFF',
        textAlign: 'center'
    },
    input: {
        fontSize: 14,
        borderBottomWidth: 1,
        marginBottom: 15
    }

})