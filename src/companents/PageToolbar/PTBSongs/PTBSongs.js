import {Card} from "@material-ui/core";
import React, {useContext} from "react";
import {AddSongs} from "./Tools/AddSongs";
import {EditSongs} from "./Tools/EditSongs";
import {RemoveSongs} from "./Tools/RemoveSongs";
import {DetailSongs} from "./Tools/DetailSongs";
import {AddInQueueSongs} from "./Tools/AddInQueueSongs";
import {SwitchActiveSongs} from "./Tools/SwitchActiveSongs";
import {SongsContext} from "../../../contex/module/songs/songsContext";
import {SearchSong} from "./Tools/SearchSong"
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

let mbt10 = {
    marginBottom: '10px',
    marginTop: '10px'
}

export const PTBSongs = (props) => {
    const {showActive, onActive} = props
    const {selected, listSong, addSong, removeSong, setSearchText, searchText} = useContext(SongsContext);
    const lenSelected = selected.length;
    return (
        <>
            <Card style={mbt10}>
                    <AddSongs lenSelected={lenSelected} songData={listSong} addSong={addSong}/>
                    <EditSongs lenSelected={lenSelected} />
                    <RemoveSongs lenSelected={lenSelected} selected={selected} removeSong={removeSong}/>
                    <DetailSongs lenSelected={lenSelected}/>
                    <AddInQueueSongs lenSelected={lenSelected}/>
                    <SwitchActiveSongs showActive={showActive} onActive = {onActive}/>
                    <SearchSong setSearchText={setSearchText} searchText={searchText}/>
            </Card>

        </>
    )
}