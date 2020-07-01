import React from "react"
// import { useTheme } from "./themeContext"
import { Container, ThemeProvider, Box } from "@material-ui/core"
import SearchAppBar from "./Menu"
import { createMuiTheme, makeStyles } from "@material-ui/core/styles"
import Form from "./components/Form"
import HistoryTable from "./components/Table"
import CoveStats from "./components/CoveStats"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: {
      main: "#2979ff",
    },
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      minWidth: theme.spacing(16),
      minHeight: theme.spacing(16),
    },
  },
}))

function FunctionalComp() {
  // const { theme, dispatchTheme } = useTheme()!
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <SearchAppBar />
      <Box component="div" className={classes.root}>
        <Container maxWidth="md">
          <CoveStats />
          <HistoryTable />
          <Form />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default FunctionalComp
