import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useStyles} from "./style";
import CustomDialog from "../CustomDialog";
import UploadButtons from "../../inputComponent/uploadButton/uploadButton";

export function DialogAttributesAdd(props) {
    const formControl = {
        title: '',
        artist: '',
        active: false,
        tags: []
    };

    const {show, onHide, onAddAttribute, dataSong} = props;
    const classes = useStyles();
    const [dialogOpened, setDialogOpened] = useState(false);
    const [active, setActive] = useState(false);
    const [showSong, setShowSong] = useState(false);
    const [attribute, setSong] = useState({});

    const setProperty = (property, value) => {
        let statusCopy = Object.assign({}, attribute);
        statusCopy[property] = value;
        setSong(statusCopy)
    };

    const handleChange = name => event => {
        setProperty(name, event.target.value)
    };

    const handleChangeSwitch = name => event => {
        name == 'active'
            ? setActive(event.target.checked)
            : setShowSong(event.target.checked);
        setProperty(name, event.target.checked)
    };

    const handleClose = () => {
        setDialogOpened(false);
        onHide();
    };

    const handleCreate = (property, close = false) => event => {
        debugger
        onAddAttribute(property);
        handleClose()
    };

    const data = {
        title: 'New Attribute',
        content:
            <div>
                <div>
                    <FormControl fullWidth className={classes.formControl}>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            value={attribute.name}
                            fullWidth
                            onChange={handleChange('name')}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth className={classes.formControl}>
                        <TextField
                            margin="dense"
                            id="priority"
                            label="Priority"
                            value={attribute.priority}
                            type="text"
                            fullWidth
                            onChange={handleChange('priority')}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <FormControlLabel
                            control={<Switch  checked={showSong} onChange={handleChangeSwitch('showSong')} color="primary" />}
                            label="Show in Songlist Rows?"
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                        <FormControlLabel
                            control={<Switch  checked={active} onChange={handleChangeSwitch('active')} color="primary" />}
                            label="Active"
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <UploadButtons/>
                    </FormControl>
                </div>

            </div>,
        action:
            <FormControl fullWidth >
                <Button onClick={handleClose} color="primary"  className={classes.button}>
                    Cancel
                </Button>
                <Button onClick={handleCreate(attribute)} color="primary"  className={classes.button}>
                    Save
                </Button>
            </FormControl>

    }

    return (
        <CustomDialog  data = { data } show={ show }  onHide={ onHide }/>
    )

}