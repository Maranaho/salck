import { createContext } from "react"

const initialState = {
    user: null
}

const slackReducer = (state,action) => {

    switch (action.type) {

        case "USER": return {...state,user:action.payload}
            
        default: {
            console.error(`Type ${action.type} is not defined`);
            return state
        }
    }
}

const SlackContext = createContext({ state:initialState, dispatch: null })

export { SlackContext, slackReducer, initialState } 