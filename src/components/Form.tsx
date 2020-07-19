import React, { useState, FormEvent, ChangeEvent } from "react"
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  FilledInput,
  Button,
} from "@material-ui/core"

interface Props {
  onSubmit: (desc: string, amount: number) => void
}

function Form({ onSubmit }: Props) {
  const [desc, setDesc] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(desc, +amount)
    setDesc("")
    setAmount("")
  }

  const handleDescChange = (e: ChangeEvent<HTMLInputElement>) =>
    setDesc(e.target.value)
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value.replace(/[^-\d+]/g, ""))
  }
  return (
    <Box component="div" mt={5}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                value={desc}
                onChange={handleDescChange}
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
                value={amount}
                onChange={handleAmountChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              type="submit"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default Form
