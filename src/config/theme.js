import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette:{
      primary:{
        light: '#424163',
        main: '#191b39',
        dark: '#000014',
        contrastText: '#ffffff',
      },
      secondary:{
        light: '#cbba80',
        main: '#998a53',
        dark: '#695d29',
        contrastText: '#000000',
      },
      type:"dark",
      background:{
        paper:"#303030",
        default:"#212121",
      },
    },
    typography:{
        // fontFamily: ['lemonmilk-regular','champagne'],
        
        h2:{
            fontFamily:'lemonmilk-regular'
        },
        h3:{
            fontFamily:'lemonmilk-regular'
        },
        h4:{
            fontFamily:'lemonmilk-regular'
        },
        body1:{
            fontFamily: 'Roboto'
        }
    },
  });
  
  theme.typography.h1 = {
    fontSize: '6rem',
    '@media (min-width:0px)': {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '6rem',
    },
  };

  export default theme;