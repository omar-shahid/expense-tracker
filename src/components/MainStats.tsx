import React from "react"
import { Paper, Typography, makeStyles } from "@material-ui/core"
import { red } from "@material-ui/core/colors"
import classnames from "classnames"

interface Props {
  error?: boolean
  heading: string
  value: number
  bg?: boolean
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1.6),
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  bgSuccess: {
    backgroundColor: "#00bfa5",
  },
  error: {
    color: red[600],
    textAlign: "center",
  },
  success: {
    color: "#00bfa5",
    textAlign: "center",
  },
  colorWhite: {
    color: "#ffffff",
  },
  errorBg: {
    backgroundColor: red[500],
  },
}))

function MainStats({ error, heading, value, bg }: Props) {
  const classes = useStyles()
  return (
    <Paper
      className={classnames(
        classes.container,
        { [classes.bgSuccess]: bg },
        { [classes.errorBg]: bg && Math.sign(value) === -1 }
      )}
      elevation={5}
    >
      <Typography
        variant="h4"
        className={classnames(classes.paper, { [classes.colorWhite]: bg })}
        component="h2"
        gutterBottom
      >
        {heading}
      </Typography>
      <Typography
        variant="h3"
        className={classnames(
          { [classes.error]: error },
          { [classes.success]: !error },
          { [classes.colorWhite]: bg }
        )}
        component="h3"
      >
        Rs {value}
      </Typography>
    </Paper>
  )
}

export default MainStats
