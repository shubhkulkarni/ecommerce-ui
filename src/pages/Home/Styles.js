import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  header: {
    flex: 1,
  },
  headerCtr: {
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 24,
  },
  card: {
    maxHeight: 260,
    maxWidth: 200,
  },
  fullSizeCard: {
    maxHeight: 260,
  },
}));
