/* eslint-disable @typescript-eslint/no-unused-vars */
import { Reducer, useReducer } from "react";
import { produce } from 'immer'

interface Data {
    a: {
        c: {
            e: number,
            f: number
        },
        d: number
    },
    b: number
}

interface Action {
    type: 'add',
    num: number
}

function reducer(state: Data, action: Action) {

    switch (action.type) {
        case 'add':
            return produce(state, (state) => {
                state.a.c.e += action.num
            })

    }
    return state;
}

function App() {
    const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(reducer, 'zero', (_param) => {
        return {
            a: {
                c: {
                    e: 0,
                    f: 0
                },
                d: 0
            },
            b: 0
        }
    });

    return (
        <div>
            <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
            <div>{JSON.stringify(res)}</div>
        </div>
    );
}

export default App;
