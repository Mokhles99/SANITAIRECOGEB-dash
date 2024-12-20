
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { changeUserRole } from '../../actions/users.actions'; // Adjust the import path
const BASE_URL = process.env.REACT_APP_BASE_URL;
const RoleSelector = ({ userId, currentRole }) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRoleChange = (roleId) => {
        dispatch(changeUserRole(userId, roleId));
        handleClose();  // Close the menu after selection
    };

    return (
        <div>
            <IconButton onClick={handleClick} aria-label="change role">
                <PersonIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleRoleChange("660c339661e486d580c76b7e")} selected={currentRole === 'admin'}>Admin</MenuItem>
                <MenuItem onClick={() => handleRoleChange("660c339661e486d580c76b7c")} selected={currentRole === 'user'}>User</MenuItem>
            </Menu>
        </div>
    );
};

export default RoleSelector;

