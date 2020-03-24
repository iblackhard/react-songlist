import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import EditIcon from "@material-ui/icons/Edit";
import {DialogSongsEdit} from "../../../../companents/Dialog/DialogSongs/DialogSongsEdit";
import {useDispatch} from "react-redux";
import {editSongActionCreator} from "../../../../store/action/modules/songs";

export const EditSongs = (props) => {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {lenSelected, songData, selected} = props;
    const dispatch = useDispatch()

    function showButton(lenSelected) {
        return lenSelected == 1 ? false : true
    }

    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed, tags }
    }

    const requestHandler = () => {

    }

    const handleEditRows = () => {
        setDialogOpened(true)
    }

    const handleEditRowsSong = (property) => {
        const {title, artist, tags, active, timesPlayed, lastPlayed} = property;
        const newSong = {
            id: selected[0],
            data: createData(
                title,
                artist,
                timesPlayed,
                lastPlayed,
                tags ,
            ),
            active: active
        }
        dispatch(editSongActionCreator(newSong))
    }

    return (
        <>
            <IconButton onClick={handleEditRows} disabled={showButton(lenSelected)}>
                <EditIcon />
            </IconButton>
            <DialogSongsEdit onAddSongs={ handleEditRowsSong } dataSong={songData.find(item => item.id == selected)} show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}