import { ActionType } from "./types"

const initialState = {
    tasks : []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionType.ADD_TASK : 
            let listTask = state.tasks
            listTask.push(action.payload)
            return { 
                ...state, 
                tasks : listTask
            }
        case ActionType.REMOVE_TASK :
            let newTask = [];
            state.tasks.map(item => {
                if(item.id != action.payload.taskID) {
                    newTask.push(item)
                }
            })

            return {
                ...state, 
                tasks : newTask
            }
        default: return state
    }
}