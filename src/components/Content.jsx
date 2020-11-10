import { Grid } from '@material-ui/core'
import React from 'react'

import CoffeeCard from './CoffeeCard'
import coffeeMakerList from '../store/constants'

const getCoffeeMakerCard = (coffeeMakerObj) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <CoffeeCard { ...coffeeMakerObj } />
    </Grid>
  )
}

function Content() {
  return (
    <Grid container spacing={4}>
      { coffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj)) }
    </Grid>
  )
}

export default Content
