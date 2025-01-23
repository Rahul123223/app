import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <Box className="login">
      <Box
        sx={{
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          height: "100vh",
          //   backgroundColor: "#f5f5f5",
        }}
      >
        {/* Sign In Box */}
        <Box
          sx={{
            width: 600,
            padding: 5,
            // border: "1px solid red",
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            margin: 2,
          }}
        >
          <Box
            sx={{
            //   border: "1px solid red",
              marginTop: 20,
              justifyItems: "center",
            }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              New to Naukri?
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              {" "}
              click apply using naukri profile.
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              {" "}
              relevant job recommendations.
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              {" "}
              Showcase profile to top companies and consultants.
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              {" "}
              Know application status on applied jobs.
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
              Register For Free
            </Button>
          </Box>
        </Box>

        {/* Sign Up Box */}
        <Box
          sx={{
            width: 300,
            padding: 4,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            margin: 2,
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            size="small"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            size="small"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            size="small"
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default Login;
