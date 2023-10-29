

// export const increase = ()=>{
//     return {
//         type: 'increase'
//     }
// }

// export const decrease = ()=>{
//     return {
//         type: 'decrease'
//     }
// }


import axios from 'axios';
export const fetchData=()=>{
    alert('hi');
return async (dispatch)=>{
    try {
        alert('abc');
    const responce = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('re');
    console.log(responce);
    console.log('re');
        dispatch({type: 'getData', payload: responce.data});
        
    } catch (error) {
        dispatch({type: 'getError', payload: error});
    }
}
}

export const fetchData2=()=>{
    alert('hi');
return async (dispatch)=>{
    try {
        alert('abc');
    const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    console.log('re');
    console.log(responce);
    console.log('re');
        dispatch({type: 'getData2', payload: responce.data});
        
    } catch (error) {
        dispatch({type: 'getError2', payload: error});
    }
}
}