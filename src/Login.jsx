import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, NavLink } from 'react-router-dom';

const Login = () => {
    return(
        <>
        <TextField
          id="outlined-full-width"
          label="Email"
          type='email'
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Login Here!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        <Button variant="contained" color="primary" className="myBtn">
        <NavLink exact  to='/register' className="myLink">Register here</NavLink>
        </Button>
        <p>Routes available</p>
        <ol>
          <li><NavLink exact  to='/count'>Cnt Button</NavLink></li>
          <li><NavLink exact  to='/pokemon'>Pokemon</NavLink></li>
          <li><NavLink exact  to='/table'>Table</NavLink></li>
        </ol>
        </>
    );
}
export default Login;