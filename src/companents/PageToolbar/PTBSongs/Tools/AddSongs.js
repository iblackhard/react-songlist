import ControlPointIcon from "@material-ui/icons/ControlPoint";
import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {DialogSongs} from "../../../Dialog/DialogSongs/DialogSongs";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import {requestHandler} from "../../../../actionPage/Songs/rows";
import {createData} from "../../../../page/Songs";
import * as shortid from "shortid";

export const AddSongs = (props) => {

    const [dialogOpened, setDialogOpened] = useState(false);
    const {songData, addSong} = useContext(SongsContext)
    const {selected} = props;

    const openDialog = () => {
        setDialogOpened(true)
    }

    function showButton(selected) {
        console.log('lenSelected', selected)
        return selected == 0 ? false : true
    }

    const addRowsSong = (property) => {
        const {title, artist, tags, active} = property;

        const newSong = {
            id: shortid.generate(),
            data: createData(
                title,
                artist,
                '',
                '',
                { type: 'tag', data: [ { name: 'Music' }] } ,
                { type: 'btn', data: [ { type: 'text', name: 'Request11', handler: requestHandler }] }
            ),
            active: active
        }
        console.log('newSong', newSong)
        const {list} = songData
        console.log('list', [...list, newSong])
        addSong(newSong)

    }

    return (
        <>
            <IconButton onClick={openDialog} disabled={showButton(selected)}>
                <ControlPointIcon />
            </IconButton>
            <DialogSongs onAddSongs={ addRowsSong } show={ dialogOpened } onHide={ () => setDialogOpened(false) }/>
        </>
    )
}