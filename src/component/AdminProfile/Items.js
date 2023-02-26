import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const ItemCont = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#f7f7f",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  height: "100vh",
  position: "absolute",
  top: "120vh",
  color: theme.palette.text.secondary,
}));
