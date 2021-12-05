import './App.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Signup from './components/Axios_Signup';
import Login from './components/Axios_Login';
import Axios_AppBar from './components/Axios_AppBar';
import NewPost from './components/Axios_NewPost';
import Posts from './components/Axios_Posts';
import PostTypes from './components/Axios_PostTypes';




const theme = createTheme({
  palette: {
    primary: {
      main: red[900]
    },
    secondary: {
      main: "#ffffff"
    }
  }
});

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Axios_AppBar />

        <div style={{ display: "flex", margin: "20px 10px" }}>
          <Signup />
          <Login />
          <NewPost />
          <PostTypes />
        </div>
        <Posts />
      </ThemeProvider>
    </div>
  );
}

export default App;
