import React, { useEffect, useState} from "react";
import TablePagination from '../../companents/TablePagination/ComponentTablePagination'
import {PTBSongs} from "./PTBSongs/PTBSongs";
import {headCells} from "./headTable";
import {connect, useDispatch} from "react-redux";
import {getSongDataActionCreator, setSelectedActionCreator} from "../../store/action/songs";
import {showAlert, showLoader} from "../../store/action/app";

const Songs = (props) => {
    const requestHandler = (id) => {
        console.log('request', id)
    };

    const nameArr = nameTag => ( {name: nameTag} )
    function createData(title, artist, timesPlayed, lastPlayed, tags) {
        return {title, artist, timesPlayed, lastPlayed,
            tags: { type: 'tag', data: Object.values(tags).map((tag, index) => nameArr(tag)) },
            action: { type: 'btn', data: [ { type: 'text', name: 'Request', handler: requestHandler }] }}
    }

    const wrapperSong = (song) => {
        return song.map(item => {
            const {title, artist, timesPlayed, lastPlayed, tags} = item.data;
            return {id: item.id, data: createData(title, artist, timesPlayed, lastPlayed, tags), active: item.active}
        })
    };

    const {active, setActive} = useState(false);
    useEffect(() => {
        // props.action.getSongData(); //Заполнение таблицы с песнями
            // dispatch(showLoader())

    },[]);
    //
    useEffect(() => {
        console.log('props.songData',props.songData)
        localStorage.setItem('songs', JSON.stringify(props.songData));
    },[props.songData]);

    const handlerFilter = () => {
        let songList = {...props.songData};
        if (Object.keys(songList.list).length > 0) {
            let songListTest = wrapperSong(Object.values(songList.list));
            const filtered = songListTest.filter(item => {

                const values = Object.values(item.data);
                const search = props.searchText.toLowerCase();
                let flag = false;
                values.forEach(val => {
                    if (typeof val == "string") {
                        if (val.toLowerCase().indexOf(search) > -1) {
                            flag = true;
                            return;
                        }
                    }
                })
                if (flag) return item
                // return item.data.title.toUpperCase().indexOf(search) !== -1
            });
            songList.list = filtered;
            return (
                songList
            )
        } else {
            return songList
        }

    };


    return (
        <>
            <PTBSongs showActive={active}/>
            <TablePagination onSelectRow = {(data) => props.action.setSelected(data)} headCells = {headCells} rowsData = {handlerFilter()} showActive={active}/>
        </>
    )
};


const mapStateToProps = state => {
    console.log('songData', state.songs)
    return {
        searchText: state.songs.searchText,
        songData: state.songs,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        action: {
            getSongData: () => dispatch(getSongDataActionCreator()),
            setSelected: (data) => setSelectedActionCreator(data),
            alert: (text) => dispatch(showAlert(text)),
            loader: () => dispatch(showLoader())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs);