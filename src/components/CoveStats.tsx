import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import MainStats from "./MainStats"

function CoveStats() {
  return (
    <>
      <Box component="div" py={5}>
        <Typography variant="h2" component="h2" gutterBottom>
          Expense tracker
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MainStats value={900} heading="Total income" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MainStats error value={400} heading="Total expense" />
        </Grid>
      </Grid>
    </>
  )
}

export default CoveStats
