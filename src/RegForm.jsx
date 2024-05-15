import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const RegistrationForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    onSubmit({ username, email, password });
    setUsername('');
    setEmail('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <Typography>Registration Form</Typography>
      <Box>
        <TextField
          id="username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
        />
      </Box>
      <Box>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </Box>
      {errorMessage && <Box>{errorMessage}</Box>}
    </form>
  );
};

export default RegistrationForm;
