import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div">
          Scroll to hide App bar
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
