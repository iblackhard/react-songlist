import IconButton from "@material-ui/core/IconButton";
import React, {useContext, useEffect, useState} from "react";
import {SongsContext} from "../../../../contex/module/songs/songsContext";
import DeleteIcon from "@material-ui/icons/Delete";
import Confirm from "../../../Dialog/Confirm";

let paramTest = {
    title: 'The kill',
    artist: '30 sec'
}

export const RemoveSongs = () => {
    const {rowsSongs, addRows} = useContext(SongsContext)
    const [confirmOpened, setConfirmOpened] = React.useState(false);
    const dataToConfirm = {
        title: 'Are you sure you want to delete these song?',
        content: <div><p>Title: <strong>{paramTest.title}</strong></p><p>Artist: <strong>{paramTest.artist}</strong></p></div>
    }

    const openConfirm = () => {
        setConfirmOpened(true)
    }

    const removeSong = (props) => {
        console.log(props)
    }

    return (
        <>
            <IconButton onClick={openConfirm}>
                <DeleteIcon />
            </IconButton>
            <Confirm
                show = { confirmOpened }
                onHide = { () => setConfirmOpened(false) }
                onAccept = { removeSong }
                data = { dataToConfirm }
            />
        </>
    )
}