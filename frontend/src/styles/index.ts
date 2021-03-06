import { createMuiTheme, makeStyles } from "@material-ui/core";
import { yellow, green, blueGrey } from "@material-ui/core/colors";
import { dark } from "@material-ui/core/styles/createPalette";

export const rootTheme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: { main: "rgb(0,0,0)" },

  }
})

export const auctionTheme = {
  backgroundColor: "white",
  headerBackgroundColor: "#ececec",
  primary: "#607d8b",
  secondary: "black"

}

export const fullHeight = {
  height: "100%"
}