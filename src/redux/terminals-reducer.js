const ADD_TERMINAL = 'ADD_TERMINAL';
const REMOVE_TERMINAL = 'REMOVE_TERMINAL';

let initialState = {
    terminals: []
}

const terminalsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TERMINAL: {
            let newTerminal = {
                id: state.terminals.length ? state.terminals[state.terminals.length-1].id+1 : 1,
                title: action.terminal.title,
                description: action.terminal.description
            };
            return {
                ...state, terminals: [...state.terminals, newTerminal]
            }
        }
        case REMOVE_TERMINAL: {
            return {...state, terminals: state.terminals.filter(terminal => terminal.id !== action.terminalId)}
        }

        default:
            return state;
    }
}

export const addTerminal = (terminal) => ({type: ADD_TERMINAL, terminal});
export const removeTerminal = (terminalId) => ({type: REMOVE_TERMINAL, terminalId});

export default terminalsReducer;