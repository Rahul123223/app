import React from "react";
import "../styles/header.css";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const Header = () => {
  return (
    <Box className="header">
      <img
        style={{ width: 160, height: 60 }}
        src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg"
        alt="Naukri Logo"
      />{" "}
      <p>Jobs</p>
      <p>Companies</p>
      <p>Services</p>
      <Box>
        <TextField
          fullWidth
          placeholder="Search for jobs, skills, or companies"
          variant="outlined"
          size="small"
          sx={{
            borderRadius: 20,
          }}
        ></TextField>
      </Box>
      <Button
        variant="contained"
        sx={{ borderRadius: 20, width: 100, height: 50 }}
      >
        Login
      </Button>
      <Button
        variant="contained"
        sx={{ borderRadius: 20, width: 100, height: 50, bgcolor: "#FC7358" }}
      >
        Register
      </Button>
      <Box>
        <FormControl>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            value={"age"}
            // label="Age"
            sx={{ width: 100, height: 50, borderRadius: 20, color: "black" }}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Header;
