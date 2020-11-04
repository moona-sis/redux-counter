const initialState={
    counter : 0
}

const CounterReducer =(state= initialState, action)=>{
    switch (action.type){
        case 'INCREMENT' :
            return {...state, counter : action.payload}
            case 'DECREMENT' :
                return {...state, counter : action.payload}

    }
    return state
}

export default CounterReducer