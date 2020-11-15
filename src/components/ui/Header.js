import React from 'react'
import {AppBar, Tab, Tabs, Toolbar} from '@material-ui/core'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { useStyles } from './Header.style'
import logo from '../../assets/logo.svg'


function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const Header = () => {
  const classes = useStyles();
   return (
  <>
    <ElevationScroll>
       <AppBar position='fixed'>
           <Toolbar disableGutters>
               <img alt="company logo" className={classes.logo} src={logo} />
               <Tabs className={classes.tabContainer}>
                 <Tab className={classes.tab} label="Home" />
                 <Tab className={classes.tab} label="Services" />
                 <Tab className={classes.tab} label="The Revolution" />
                 <Tab className={classes.tab} label="About" />
                 <Tab className={classes.tab} label="Home" />
               </Tabs>
           </Toolbar>
       </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}/>
  </>
   )
}

export default Header;