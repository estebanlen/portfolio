import React from "react";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import { mdiGitlab } from "@mdi/js";
import Icon from "@mdi/react";

const MyIcon = (props) => (
  <IconButton
    href={props.href}
    color="inherit"
    aria-label="upload picture"
    component="a"
    target="_blank"
  >
    {props.path ? <Icon path={props.path} size={1} /> : props.children}
  </IconButton>
);

function SocialMedia(props) {
  return (
    <div>
      <MyIcon href="https://www.linkedin.com/in/estebanlen">
        <LinkedInIcon />
      </MyIcon>
      <MyIcon href="https://www.instagram.com/tebienlugares">
        <InstagramIcon />
      </MyIcon>
      <MyIcon href="mailto:estebandlen@gmail.com">
        <MailIcon />
      </MyIcon>
      <MyIcon href="https://gitlab.com" path={mdiGitlab} />
    </div>
  );
}

export default SocialMedia;
