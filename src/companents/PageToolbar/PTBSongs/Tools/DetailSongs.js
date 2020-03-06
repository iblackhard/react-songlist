import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

export const DetailSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {rowsContext} = useContext(SongsContext)
    const {lenSelected} = props;

    const addItemToRows = () => {
        setDialogOpened(true)
    }


    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    return (
        <>
            <IconButton onClick={addItemToRows} disabled={showButton(lenSelected)}>
                <ErrorOutlineIcon />
            </IconButton>
        </>
    )
}