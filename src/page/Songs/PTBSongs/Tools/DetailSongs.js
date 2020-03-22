import IconButton from "@material-ui/core/IconButton";
import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import {useHistory} from "react-router";
import {addUserIdAtLink} from "../../../../companents/GlobalParamaters/linkWithUserId";

export const DetailSongs = (props) => {
    const {lenSelected, songData, selected} = props;
    const history = useHistory();


    const showDetail = () => {
        debugger
        const uuidSong = songData.find(item => item.id === selected[0]);
        history.push(addUserIdAtLink("/songs/detail/"+uuidSong.id))
    }

    function showButton(lenSelected) {
        return lenSelected === 1 ? false : true
    }


    return (
        <IconButton onClick={showDetail} disabled={showButton(lenSelected)}>
            <ErrorOutlineIcon />
        </IconButton>
    )
}