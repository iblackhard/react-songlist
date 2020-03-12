import {
    ADD_SONG,
    EDIT_SONG,
    REMOVE_SONG,
    SET_SEARCHTEXT,
    SET_SELECTED,
    SET_SONGDATA,
    SHOW_DETAIl,
    TOGGLE_ACTIVE
} from "../../types";

// const handlers = {
//     [SET_ROWS]: (state, action) =>  {...state, list: action.list},
//     [ADD_ROWS]: (state, action) => [...state, action.payload],
//     // [REMOVE_ROWS]: (state, action) => [...state.items.slice(0, action.payload)],
//     DEFAULT: state => state
// }

export const songsReducer = (state, action) => {
    // const handler = handlers[action.type]  || handlers.DEFAULT
    // return handler(state, action)
    switch (action.type) {
        case SET_SONGDATA:
            return { ...state, list: action.list };
        case SET_SEARCHTEXT:
            return { ...state, searchText: action.text };
        case TOGGLE_ACTIVE:
            return { ...state, active: action.active,  selected: [] };
        case ADD_SONG:
            return { ...state, list: [ ...state.list, action.newSong ] };
        case SET_SELECTED:
            return { ...state, selected: action.newSelect };
        case SHOW_DETAIl:
            return { ...state, detailShow: action.toggleDetail };//TODO delete
        case REMOVE_SONG:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        case EDIT_SONG:
            return { ...state, ...state.list.forEach((item, index) => ((state.list[index].id === action.song.id) &&
                    (state.list[index].data = action.song.data) &&
                    (state.list[index].active = action.song.active)))
            };
        default:
            return {
               state
            }
    }
}