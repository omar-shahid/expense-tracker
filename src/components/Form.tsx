import React from "react"
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  FilledInput,
  Button,
} from "@material-ui/core"

function Form() {
  return (
    <Box component="div" mb={5}>
      <form noValidate autoComplete="off">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={7}>
            <FormControl
              fullWidth
              variant="filled" /*className={classes.margin}*/
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Description
              </InputLabel>
              <FilledInput
                id="standard-adornment-amount"
                // value={values.amount}
                // onChange={handleChange("amount")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl
              fullWidth
              variant="filled" /*className={classes.margin}*/
            >
              <InputLabel htmlFor="standard-adornment-amount">
                Add a - sign to treat it as expense
              </InputLabel>
              <FilledInput
                id="standard-adornment-amount"
                type="number"
                // value={values.amount}
                // onChange={handleChange("amount")}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button variant="contained" size="large" color="secondary">
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default Form
