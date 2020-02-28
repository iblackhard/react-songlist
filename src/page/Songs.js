import React, {useContext} from "react";
import IconButton from "@material-ui/core/IconButton";
import {Card} from "@material-ui/core";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TablePagination from '../companents/TablePagination/ComponentTablePagination'
import Switch from "@material-ui/core/Switch";
import {EditModeContext} from "../contex/editMode/editNodeContext";


export const Songs = () => {

    const {statusEditMode} = useContext(EditModeContext)

    const btnAction = [
        { type:'button', title:'Request', handler: requestHandler },
    ]

    // function handlerControl() {
    //     show('qwe')
    // }

    let mbt10 = {
        marginBottom: '10px',
        marginTop: '10px'
    }


    function requestHandler(id) {
        console.log('request', id)

    }

    function createData(title, artist, timesPlayed, lastPlayed, tags, action) {
        return {title, artist, timesPlayed, lastPlayed, tags, action}
    }

    const headCells = [
        { id: 'title', numeric: false, order: true, disablePadding: true, editMode: true, label: 'Title', type: 'txt' },
        { id: 'artist', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Artist', type: 'txt' },
        { id: 'times-played', numeric: true, order: true, disablePadding: false, editMode: true, label: 'Times played', type: 'txt' },
        { id: 'last-played', numeric: false, order: true, disablePadding: false, editMode: true, label: 'Last Played', type: 'txt' },
        { id: 'tags', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'tag' },
        { id: 'action', numeric: false, order: false, disablePadding: false, editMode: true, label: '', type: 'btn' },
    ];

    const rowsTest = [
        createData(
            'The Kill',
            '30 Seconds To Mars',
            1,
            '1 week age',
            { name: 'Music',  type: 'tag' },
            { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }
            ),
        createData(
            'Hello',
            'Adele',
            2,
            '2 week age',
            { name: 'Music', type: 'tag' },
            { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }
            ),
    ]


    //TODO переписать на массив с типом элемента

    return (
        <div>
            <h1>Songs</h1>

            <Card style={mbt10}>
                <IconButton>
                    <ControlPointIcon/>
                </IconButton>
                <IconButton>
                    <EditIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <ErrorOutlineIcon/>
                </IconButton>
                <IconButton>
                    <PlaylistAddIcon/>
                </IconButton>
                <>
                <Switch color="primary" />
                    Show inactive
                </>
            </Card>
            <TablePagination headCells = {headCells} rowsData = {rowsTest} />
        </div>
    )
}