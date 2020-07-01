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
import { red } from "@material-ui/core/colors"

function createData(name: string, amount: number, isExpense: boolean) {
  return { name, amount, isExpense }
}

const rows = [
  createData("Frozen yoghurt", 159, false),
  createData("Ice cream sandwich", 237, false),
  createData("Eclair", 262, true),
  createData("Cupcake", 305, false),
  createData("Gingerbread", 356, true),
]

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
  return (
    <Box component="div" my={10}>
      <Typography
        component="h2"
        align="center"
        variant="h4"
        color="textSecondary"
      >
        There is nothing you added
      </Typography>

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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.textlg}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <Typography
                    className={classnames(
                      { [classes.errorColor]: row.isExpense },
                      { [classes.successColor]: !row.isExpense },
                      classes.textlg
                    )}
                  >
                    {row.isExpense ? `-${row.amount}` : `+${row.amount}`}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default HistoryTable
