import { IconButton } from '@material-ui/core';
import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

const Icon = (props) => (
        <IconButton color="inherit" aria-label="upload picture" component="span">
            {props.children}
        </IconButton>
)

function SocialMedia(props) {
    return (
        <div>
            <Icon><LinkedInIcon/></Icon>
            <Icon><GitHubIcon/></Icon>
            <Icon><MailIcon/></Icon>

        </div>
    );
}

export default SocialMedia;