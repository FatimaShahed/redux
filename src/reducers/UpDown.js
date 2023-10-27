import React from 'react';

const initialState = {
    counter : 0
}
const changeNumber = (state=initialState,action) =>
{
    if(action.type==='INCREMENT')
    {
        return {...state,counter:state.counter+action.payload}
    }
    else if(action.type==="DECREMENT")
    {
        return {...state,counter:state.counter-action.payload}
    }
    else
        return initialState
}

export default changeNumber;