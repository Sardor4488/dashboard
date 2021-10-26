import React, { useState } from "react";
import IntroductionCss from "./introductionCss";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
} from "@material-ui/core";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Introduction = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [show, setshow] = useState(false);
  const showNav = () => {
    setshow(!show);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <IntroductionCss>
      <div className="introduction d-flex justify-content-center align-items-center h-100 w-100 ">
        <div className="introductionCard p-4">
          <h4 className="text-center">... Tizimiga kirish</h4>
          <div>
           <div className="d-flex justify-content-center pt-5 align-items-center w-100 h-100">
             
           <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
             <Input className="my-3 mt-5" placeholder="To'liq ismingizni kiriting" />
              
              <Input
              placeholder="Parolingizmi kiriting"
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              /> 

<Button  className="mt-3 ">Kirish</Button
            > 
            </FormControl>
                   </div>
          </div>
        </div>
      </div>
    </IntroductionCss>
  );
};

export default Introduction;
