import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Toolbar,
  AppBar,
  Badge,
  IconButton,
  Container,
} from "@mui/material";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// context
import { CardContext } from "../../contexts/CardContextProvider";

const Navbar = () => {
  const { state } = useContext(CardContext);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  const onLoginClick = () => {
    setIsPopupActive(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsPopupActive(false);
    
    //Login API not returning any reponse and getting timed out error.
    // fetch('https://fakestoreapi.com/auth/login',{
    //         method:'POST',
    //         body:JSON.stringify({
    //             username: userName,
    //             password: password
    //         })
    //     })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        // boxShadow: "none"
      }}
    >
      {/* <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup> */}
      {
        isPopupActive ? 
        <div style={styles.popUpWrapper}>
          <div style={styles.popUpContent}>
            <p style={styles.formHead}>Login</p>
            <div style={styles.inputWrapper}>
              <p><label>Username:</label></p>
              <input style={styles.input} type="text" id="username" name="username" onChange={handleUsernameChange} value={userName} required />
            </div>
            <div style={styles.inputWrapper}>
              <p><label>Password:</label></p>
              <input style={styles.input} type="password" id="password" name="password" onChange={handlePassChange} value={password} required />
            </div>
            <p style={styles.loginBtn} onClick={() => handleLogin() }>Login</p>
          </div>
        </div>
        : <></>
      }
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/products">
            <Typography variant="h6" component="div" color="text.secondary">
              Store
            </Typography>
          </Link>
          { !isLoggedIn ? <p style={styles.loginLink} onClick={() => onLoginClick() }>Login</p> : <></> }
          <Link to="/cards">
            <IconButton>
              <Badge badgeContent={state.itemsCounter} color="info">
                <ShoppingCartIcon color="action" sx={{ fontSize: "30px" }} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const styles = {
  popUpWrapper: {
    position: 'absolute',
    width: 500,
    height: 500,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2,
    padding: 40
  },
  popUpContent: {
    width: '100%',
    maxWidth: 500,
    color: 'black',
    textAlign: 'center',
    top: 0,
    left: 0,
    width: '100%',
    paddingBottom: 50,
    backgroundColor: 'white',
    margin: 'auto'
  },
  formHead: {
    fontSize: 24,
    fontWeight: 800,
    paddingTop: 50
  },
  inputWrapper: {
    textAlign: 'left',
    maxWidth: 300,
    margin: 'auto',
    marginTop: 30
  },
  input: {
    padding: '10px 20px',
    width: '100%',
    backgroundColor: '#e7f0fe'
  },
  loginBtn: {
    backgroundColor: '#f74e22',
    borderRadius: 5,
    fontSize: 18,
    color: 'white',
    width: 140,
    margin: 'auto',
    marginTop: 20,
    fontWeight: 900,
    padding: 6,
    cursor: 'pointer'
  },
  loginLink: {
    fontSize: 20,
    color: 'black',
    cursor: 'pointer',
    padding: '10px 20px',
    cursor: 'pointer',
    border: '1px solid black',
    borderRadius: 5
  }
};

export default Navbar;