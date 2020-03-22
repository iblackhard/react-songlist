import IconButton from "@material-ui/core/IconButton";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import React, {useContext} from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router";
import {addUserIdAtLink} from "../../../companents/GlobalParamaters/linkWithUserId";

export const ToolDetailBack = () => {
    const history = useHistory();

    function detailClose() {
        // detailShow(false);
        history.push(addUserIdAtLink("/songs"))
    }

    return (
        <>
            <IconButton onClick={detailClose}>
                <ArrowBackIcon />
            </IconButton>
        </>
    )
};