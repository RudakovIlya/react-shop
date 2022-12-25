import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Shop
        </Typography>
        <Button color="inherit" target={"_blank"} href="https://github.com/RudakovIlya/react-shop">
          Repo
        </Button>
      </Toolbar>
    </AppBar>
  );
};
