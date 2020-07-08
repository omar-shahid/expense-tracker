import React from "react"
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core"
import classnames from "classnames"
import { useHistory } from "./../historyContext"
import { red } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  textlg: {
    fontSize: theme.spacing(2.6),
  },
  tableHeading: {
    fontSize: theme.spacing(5),
  },
  errorColor: {
    color: red[500],
  },
  successColor: {
    color: "#00bfa5",
  },
}))

function HistoryTable() {
  const classes = useStyles()
  const { history } = useHistory()

  return (
    <Box component="div" my={10}>
      {history.history.length > 0 ? (
        <TableContainer component={Paper}>
          <Table size="medium" aria-label="history">
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeading}>
                  Description
                </TableCell>
                <TableCell align="right" className={classes.tableHeading}>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {history.history.map((row) => (
                <TableRow key={row.description}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.textlg}
                  >
                    {row.description}
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      className={classnames(
                        { [classes.errorColor]: row.isExpense },
                        { [classes.successColor]: !row.isExpense },
                        classes.textlg
                      )}
                    >
                      {row.isExpense ? `${row.amount}` : `${row.amount}`}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography
          component="h2"
          align="center"
          variant="h4"
          color="textSecondary"
        >
          There is nothing you added
        </Typography>
      )}
    </Box>
  )
}

export default HistoryTable
