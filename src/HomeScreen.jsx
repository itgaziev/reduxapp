import React from 'react'
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import { ActionType } from './models/types'
const HomeScreen = (props) => {
    console.log(props)
    const {route, navigation} = props
    const { params } = route
    const [ tasks, setTasks ] = React.useState(props.tasks)
    const removeTask = (task) => {
        props.removeTask(task.id)
    }

    React.useEffect(() => {
        setTasks(props.tasks)
    })
    
    return (
        <View>
            <Text style={ styles.titleHeader }>Список задач</Text>
            <FlatList
                style={{ height: 535 }}
                data={tasks}
                keyExtractor={task => task.id}
                renderItem={ (task, index) => <TaskItem task={task.item} index={index} remove={removeTask} /> }
            />

            <TouchableOpacity style={ styles.btnCreate } onPress={() =>  navigation.navigate("Task")}>
                <Text style={ styles.btnText }>Создать задачу</Text>
            </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = (state) => ({ tasks : state.tasks })
const mapDispatchToProps = (dispatch) => ({
    removeTask: (taskID) => {
        dispatch({
            type: ActionType.REMOVE_TASK,
            payload: {
                taskID : taskID, 
            }
        })
    }
})
const connectComponent = connect(mapStateToProps, mapDispatchToProps)

export default connectComponent(HomeScreen)


const TaskItem = (props) => {
    const { task, index, remove } = props
    return (
        <View key={index} style={ styles.boxTask}>
            <Text style={ styles.taskTitle }>{ task.name }</Text>
            <TouchableOpacity onPress={() => remove(task) } style={ styles.taskRemoveBtn }>
                <Text style={ styles.taskRemoveText }>Удалить</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleHeader : {
        marginTop: 15,
        textAlign: 'center',
        fontSize : 22,
        marginBottom: 25
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
    boxTask : {
        borderBottomWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskTitle : {
        fontSize: 14,
        fontWeight: '600'
    },
    taskRemoveBtn: {
        backgroundColor: 'red',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    taskRemoveText: {
        color: '#FFF'
    }
})