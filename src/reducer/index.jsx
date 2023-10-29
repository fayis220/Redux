

// export const reducer =(state= 0, action)=>{


// switch(action.type){
//  case 'increase' :
// return state + 1;

// case 'decrease':
//     return state -1;

// default:
//     return state;

// }
// }

let initialState = {data: null, error: null}

export  const reducer = (state= initialState, action)=>{


    switch(action.type){
        case 'getData':
        return{
            ...state,
            data: action.payload,
            error: null,
        }
        case 'getError':
        return{
            ...state,
            data: null,
            error: action.payload,
        }
        default:
            return state
    }
}


let initialState2 = {data: null, error: null}

export  const reducer2 = (state= initialState2, action)=>{


    switch(action.type){
        case 'getData2':
        return{
            ...state,
            data: action.payload,
            error: null,
        }
        case 'getError2':
        return{
            ...state,
            data: null,
            error: action.payload,
        }
        default:
            return state
    }
}