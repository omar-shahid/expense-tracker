import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import MainStats from "./MainStats"
import { useHistory } from "./../historyContext"

function CoveStats() {
  const { history } = useHistory()
  return (
    <>
      <Box component="div" py={5}>
        <Typography variant="h2" component="h2" gutterBottom>
          Expense tracker
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <MainStats value={history.income} heading="Total income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MainStats error value={history.expense} heading="Total expense" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MainStats
            value={history.availableIncome}
            bg
            heading="Available income"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default CoveStats
