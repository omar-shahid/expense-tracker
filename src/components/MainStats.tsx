import React from "react"
import { Paper, Typography, makeStyles } from "@material-ui/core"
import { red } from "@material-ui/core/colors"

interface Props {
  error?: boolean
  heading: string
  value: number
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(5),
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  error: {
    color: red[600],
    textAlign: "center",
  },
  success: {
    color: "#00bfa5",
    textAlign: "center",
  },
}))

function MainStats({ error, heading, value }: Props) {
  const classes = useStyles()
  return (
    <Paper className={classes.container}>
      <Typography
        variant="h4"
        className={classes.paper}
        component="h2"
        gutterBottom
      >
        {heading}
      </Typography>
      <Typography
        variant="h3"
        className={error ? classes.error : classes.success}
        component="h3"
      >
        Rs {value}
      </Typography>
    </Paper>
  )
}

export default MainStats
