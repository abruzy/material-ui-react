import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}))

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Abruzy
        </Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Header
