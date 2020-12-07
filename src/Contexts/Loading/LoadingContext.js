import React from 'react';
import './LoadingContext.css';

export const LoadingContext = React.createContext();

const defaultState = {
    active: false
}

function reducer(prevState = defaultState, action) {
    switch (action.type) {
        case 'UPSTREAM': return {
            ...action.payload
        }

        case 'DOWNSTREAM': return {
            ...action.payload
        }

        case 'REMOVELOADING': return {
            ...defaultState
        }

        default: return prevState
    }
}

export function LoadingContextProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, defaultState)

    function upStreamAnime() {
        dispatch({
            type: 'UPSTREAM',
            payload: {
                active: true,
                className: 'spinner',
                className1: 'bounce1',
                className2: 'bounce2',
                className3: 'bounce3',
                text: 'در حال ارسال اطلاعات به سرور'
            }
        })
    }

    function downStreamAnime() {
        dispatch({
            type: 'DOWNSTREAM',
            payload: {
                active: true,
                className: 'spinner1',
                className1: 'rect1',
                className2: 'rect2',
                className3: 'rect3',
                text: 'در حال دریافت اطلاعات از سرور'
            }
        })
    }

    function removeLoading() {
        dispatch({
            type: 'REMOVELOADING'
        })
    }

    return <LoadingContext.Provider value={{ LoadingContextPro: state, upStreamAnime, downStreamAnime, removeLoading }} >
        {props.children}
    </LoadingContext.Provider>
}