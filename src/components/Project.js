import React, { useState } from 'react';
import AppDialog from './AppDialog';
import MyCard from './MyCard';

function Project({item}) {
    const [open, setOpen] = useState(false);

    const handleOpen = ()=>{setOpen(true)}
    const handleClose = ()=>{setOpen(false)}
    return (
        <div>
            <MyCard item={item} handleOpen={handleOpen}/>
            <AppDialog item={item} open={open} handleClose={handleClose}/>
        </div>
    );
}

export default Project;