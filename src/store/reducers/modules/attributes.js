import React from "react";
import {
    ADD_ATTRIBUTES,
    ADD_SONG, EDIT_ATTRIBUTES,
    EDIT_SONG, REMOVE_ATTRIBUTES,
    REMOVE_SONG, SET_ATTRIBUTESDATA,
    SET_SEARCHTEXT,
    SET_SELECTED, SET_SELECTED_ATTRIBUTES,
    SET_SELECTED_SONG,
    SET_SONGDATA,
    TOGGLE_ACTIVE
} from "../../types";

const initialState = {
    list: [],
    selected: [],
};

export const attributesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ATTRIBUTESDATA:
            return { ...state, list: action.list };
        case ADD_ATTRIBUTES:
            return { ...state, list: Object.values(state.list).concat(action.newSong) };
        case SET_SELECTED_ATTRIBUTES:
            return { ...state, selected: action.newSelect };
        case REMOVE_ATTRIBUTES:
            return { ...state, list: state.list.filter(item => item.id !== action.row), selected: [] };
        case EDIT_ATTRIBUTES:
            return { ...state, ...state.list.forEach((item, index) => ((state.list[index].id === action.song.id) &&
                    (state.list[index].data = action.song.data) &&
                    (state.list[index].active = action.song.active)))
            };
        default:
            return  {...state}
    }
};