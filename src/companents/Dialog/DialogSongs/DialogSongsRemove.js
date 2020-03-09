import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomDialog from "../CustomDialog";

let paramTest = {
    title: 'The kill',
    artist: '30 sec'
}

export default function DialogSongRemove(props) {
    const [dialogOpened, setDialogOpened] = useState(false);
    const {show, onHide, onAccept} = props

    useEffect(() => {
        setDialogOpened(show)
    },[show])

    const handleClose = () => {
        setDialogOpened(false);
        onHide()
    };

    const handlerAccept = () => {
        handleClose()
        onAccept(true)
    }

    const data = {
        title: 'Are you sure you want to delete these song?',
        content: <div><p>Title: <strong>{paramTest.title}</strong></p><p>Artist: <strong>{paramTest.artist}</strong></p></div>,
        action:  <>
            <Button variant="outlined" onClick={handleClose} color="primary">
                         Disagree
             </Button>
            <Button variant="outlined" onClick={handlerAccept} color="secondary" autoFocus>
                    Agree
            </Button>
            </>
    }

    return (
        <CustomDialog  data = { data } show={ dialogOpened }  onHide={ () => setDialogOpened(false) }/>
    );
}