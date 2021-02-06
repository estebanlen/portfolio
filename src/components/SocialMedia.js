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
      {props.path?
          <Icon path={props.path} size={props.size==="" ? 1 : 1.5}/>
      :
          props.children
      }
  </IconButton>
)

function SocialMedia({size=""}) {

return (
  <div>
      <MyIcon href="https://www.linkedin.com/in/estebanlen">
          <LinkedInIcon fontSize={size}/>
      </MyIcon>
      <MyIcon href="https://www.instagram.com/tebienlugares">
          <InstagramIcon fontSize={size}/>
      </MyIcon>
      <MyIcon href="mailto:esteban.dlen@gmail.com">
          <MailIcon fontSize={size}/>
      </MyIcon>
      <MyIcon href="https://gitlab.com/esteebanlen" path={mdiGitlab} size={size}/>
  </div>
);
}

export default SocialMedia;
