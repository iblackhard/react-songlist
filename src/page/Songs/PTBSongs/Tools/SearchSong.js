import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import {StyledFormControl, StyledOutlinedInput, useStyles} from "../style";

export const SearchSong = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState('');
    const {searchText, setSearchText} = props;

    const handleChange = event => {
        setSearchText( event.target.value );
    };

    const handleClearTextField = event => {
        setSearchText( '' );
    };

    return (
        <StyledFormControl className={classes.margin} >

            <StyledOutlinedInput
                id="standard-adornment-amount"
                value={searchText}
                placeholder="Search"
                onChange={handleChange}
                variant="outlined"
                endAdornment={
                    <InputAdornment position="end">
                        {searchText ?
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClearTextField}
                                size="small"
                            >
                                <CloseIcon />
                            </IconButton> :
                            <IconButton
                                aria-label="toggle password visibility"
                                size="small"
                            >
                                <SearchIcon />
                            </IconButton>

                        }
                    </InputAdornment>
                }
                // startAdornment={ <InputAdornment  position="start"><SearchIcon className={classes.searhIcon}/></InputAdornment>}
            />
        </StyledFormControl>
    )
}