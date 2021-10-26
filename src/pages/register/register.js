import React, { useState } from "react";
import RegisterWrapper from "./registerWrapper";
import { Form, FormGroup, Label, FormText } from "reactstrap";
import Button from "@material-ui/core/Button";
import {
  Input,
  TextField,
  Box,
  FormLabel,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Radio,
  Checkbox,
  FormControlLabel,
  Slider,
  TextareaAutosize,
} from "@material-ui/core";
import { el } from "date-fns/locale";
import MyInput from "../../Ui/Input/myInput";
// import MyInput from "../../Ui/Input/myInput";
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import DesktopDatePicker from "@material-ui/lab/DesktopDatePicker";
// import DesktopDatePicker from "@material-ui/lab/DesktopDatePicker";
// import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 10;
const Register = () => {
  const [show, setShow] = useState(false);
  const inputShow = () => {
    setShow(!show);
  };


 


  const [value1, setValue1] = useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 2000 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChangeCheck = (event) => {
    setSelectedValue(event.target.value);
  };
  const [age, setAge] = React.useState("");

  const handleChangee = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // state = { a: false };
  // showNav = () => {
  //   this.setState((state) => {
  //     return { a: !state.a };
  //   });
  // };
  const [fiotext, setFiotext] = useState("");
  const fioText = (event) => {
    setFiotext(event.target.value);

  };
  const [studyInst, setStudyInst] = useState(false);

  const studyIns = () => {
    setStudyInst(!studyInst);
  };


  const [ sertifikat, setSetifikat] = useState(false);
   const setifikatIelts = () => {
    setSetifikat(!sertifikat);
  };

  const [work, setWork] = useState(false);
  const inputWork = () => {
    setWork(!work);
  };
  return (
    <RegisterWrapper>
      <div className="title">
        <div className="py-2 container">
          <Button />
          <h1 className="text-center m-0">Ro'yxatdan o'tish</h1>
          <p className="text-center">
            ro'yxatdan o'tish uchun quyidagi ma'lumotlarni to'ldiring
          </p>
        </div>
      </div>
      <div>
        <div className="container p-4">
          <Form>
            <div className="row container">
              <div className="col-6 ">
                <InputLabel htmlFor="FIO">
                  Familya Ismingiz Sharifingizni kiriting
                </InputLabel>
                 
                 <MyInput
                  id="FIO"
                  required
                  placeholder="F.I.O"
                   className="myInput pt-3 text-capitalize"
                />
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="pasport">
                  Pasport seriyasini kiriting
                </InputLabel>

                 
                <MyInput
                  id="pasport"
                  required
                  placeholder="AAXXXXXXX"
                   className="myInput pt-3 text-capitalize"
                />
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="pinfl">
                  Pasport PINFL raqamini kiriting (14 raqam!)
                </InputLabel>
 
                <MyInput
                required
                  placeholder="AA1234567"
                  maxLength="14"
                  className="myInput text-capitalize"
                />
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="date">
                  Tug'ilgan kun, oy, yilingizni kiriting
                </InputLabel>
                <Input type="week" />
              </div>
              <div className="col-6 ">
                <InputLabel id="demo-simple-select-label" className="pb-2">
                  Tug'ilgan viloyatingizni tanlang
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChangee}
                >
                  <MenuItem value={1}>Toshkent</MenuItem>
                  <MenuItem value={2}>Samarqand</MenuItem>
                  <MenuItem value={3}>Buxoro</MenuItem>
                  <MenuItem value={4}>Qashqadaryo</MenuItem>
                  <MenuItem value={5}>Navoyi</MenuItem>
                  <MenuItem value={6}>Surxondaryo</MenuItem>
                  <MenuItem value={7}>Farg'ona</MenuItem>
                  <MenuItem value={8}>Andijon</MenuItem>
                  <MenuItem value={9}>Jizzax</MenuItem>
                  <MenuItem value={10}>Xorazm</MenuItem>
                  <MenuItem value={11}>Sirdaryo</MenuItem>
                  <MenuItem value={12}>Qoraqalpog'iston</MenuItem>
                </Select>
              </div>
              <div className="col-6 ">
                <InputLabel className="pb-2" id="demo-simple-select-label">
                  Tumaningizni tanlang
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChangee}
                >
                  <MenuItem value={1}>Toshkent</MenuItem>
                  <MenuItem value={2}>Samarqand</MenuItem>
                  <MenuItem value={3}>Buxoro</MenuItem>
                  <MenuItem value={4}>Qashqadaryo</MenuItem>
                  <MenuItem value={5}>Navoyi</MenuItem>
                  <MenuItem value={6}>Surxondaryo</MenuItem>
                  <MenuItem value={7}>Farg'ona</MenuItem>
                  <MenuItem value={8}>Andijon</MenuItem>
                  <MenuItem value={9}>Jizzax</MenuItem>
                  <MenuItem value={10}>Xorazm</MenuItem>
                  <MenuItem value={11}>Sirdaryo</MenuItem>
                  <MenuItem value={12}>Qoraqalpog'iston</MenuItem>
                </Select>
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="adres">Manzil</InputLabel> 
                <MyInput
                id="adres"
                  maxLength="100"
                   required
                  placeholder="Manzilingizni kiriting"
                   className="myInput pt-3 text-capitalize"
                />
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="tel">Telefon raqam</InputLabel>

               
                <MyInput
                  id="tel"  value="+998"
                  required  id="tel"
                  required
                 
                  placeholder="F.I.O"
                   className="myInput pt-3 text-capitalize"
                />
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="gmail">Elektron pochta</InputLabel>

                 
                <MyInput
                  id="gmail"
                  required
                  placeholder="...@gmail.com"
                   className="myInput pt-3 text-capitalize"
                />
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="question " className="pb-3">
                  O'qiysizmi yoki bitirganmisiz?
                </InputLabel>
                <div>
                 
                 <FormControlLabel
                  value=""
                   control={<Checkbox />}
                  label="Oqiyman"
                  onChange={studyIns}
                  labelPlacement="start"
                />

                   
               
                 
                  <FormControlLabel
                  value=""
                  onChange={inputWork}
                  control={<Checkbox />}
                  label="Bitirganman"
                  labelPlacement="start"
                />
                
               
               
                </div>
              </div>
              <div className="col-6">
              <div  className={` ${studyInst ? "d-block" : "d-none"}`} >
                <InputLabel htmlFor="gmail">O'qiyotgan Oliy ta'lim muassasangizni kiriting</InputLabel>
                 <MyInput   className={` myInput pt-3 `} />
                </div>
              </div>
              <div className="col-6">
              <div  className={` ${studyInst ? "d-block" : "d-none"}`} >
                <InputLabel htmlFor="gmail">O'qiyotgan yo'nalishingizni kiriting</InputLabel>
                 <MyInput   className={` myInput pt-3  `} />
                </div>
              </div>
              <div className="col-6">
              <div  className={` ${work ? "d-block" : "d-none"}`} >
                <InputLabel htmlFor="gmail">Tamomlagan Oliygohingiz nomini kiriting</InputLabel>
                 <MyInput   className={` myInput pt-3 ${work ? "d-block" : "d-none"}`} />
                </div>
              </div>
              <div className="col-6">
                 <div  className={` ${work ? "d-block" : "d-none"} pt-3`} >
                <InputLabel htmlFor="gmail">TamomlaganYo'nalishingizni kiriting</InputLabel>
                 <MyInput   className={` myInput pt-3 ${work ? "d-block" : "d-none"}`} />
                </div>
              </div>
              <div className="col-6 ">
                <InputLabel id="demo-simple-select-label" className="pb-2">
                  Qaysi dasturlash tillarini bilasiz?
                </InputLabel>
                <FormControlLabel
                  value="HTML"
                  control={<Checkbox />}
                  label="HTML"
                  labelPlacement="start"
                />{" "}
                <FormControlLabel
                  value="CSS"
                  control={<Checkbox />}
                  label="CSS"
                  labelPlacement="start"
                />{" "}
                <FormControlLabel
                  value="JS"
                  control={<Checkbox />}
                  label="JS"
                  labelPlacement="start"
                />{" "}
                <FormControlLabel
                  value="JAVA"
                  control={<Checkbox />}
                  label="JAVA"
                  labelPlacement="start"
                />{" "}
                <FormControlLabel
                  value="PYTHON"
                  control={<Checkbox />}
                  label="PYTHON"
                  labelPlacement="start"
                />{" "}
                <FormControlLabel
                  value="C++"
                  control={<Checkbox />}
                  label="C++"
                  labelPlacement="start"
                />
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="diopazon" className="pb-3">
                  Dasturchi sifatida oyiga qancha daromat topa olamiz.
                </InputLabel>
                <Box sx={{ width: 200 }}>
                  <Slider
                    id="diopazon"
                    getAriaLabel={() => "Minimum distance shift"}
                    value={value2}
                    onChange={handleChange2}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                  />
                </Box>
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="textAre">
                  {" "}
                  O'zingiz haqingizda ma'lumot kiriting
                </InputLabel> 
                <TextareaAutosize
                  maxLength="1024"
                  required
                  id="textAre"
                  className="w-50 textArea"
                ></TextareaAutosize>
              </div>
       
             
            
              <div className="col-6 ">
                <InputLabel htmlFor="checkbox">
                  IELTS sertifikatingiz mavjudmi?
                </InputLabel>
                <FormControlLabel
                  id="checkbox"
                  onChange={setifikatIelts}
                  control={<Checkbox   />}
                  label="IELTS"
                />
              </div>
              
              <div  className={`col-6 ${sertifikat ? "d-block" : "d-none"}` } >
              <div  >
                <InputLabel htmlFor="gmail">IELTS nomerini kiriting</InputLabel>
                 <MyInput   className={` myInput pt-3  `} />
                </div>
              </div>

                <div className="col-6 ">
              <InputLabel htmlFor="pasport" className="pb-3">
                  Pasportingizni (pdf) variantini yuklang
                </InputLabel>

                <TextField
                  id="pasport"
                  type="file"
                  itemType="PDF"
                  variant="standard"
                  required
                />
              </div>
              <div className="col-6 ">
              <InputLabel htmlFor="pasport" className="pb-3">
                 Rasm (3x4)
                </InputLabel>

                <TextField
                  id="pasport"
                  type="file"
                  itemType="PDF"
                  variant="standard"
                  required
                />
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="pasport" className="pb-3">
                  Diplomingizni yuklang (pdf)
                </InputLabel>

                <TextField
                  id="pasport"
                  type="file"
                  itemType="PDF"
                  variant="standard"
                  required
                />
              </div>
              <div   className={`col-6  ${sertifikat ? "d-block" : "d-none"}`}>
               <div >
               <InputLabel htmlFor="pasport" className="pb-3">
                  IELTS yuklang (pdf. mavjud bo'lsa)
                </InputLabel>

                <TextField
                  id="pasport"
                  type="file"
                  variant="standard"
                  required
                />
               </div>
              </div>
              <div className="col-6 ">
                <InputLabel htmlFor="pasport" className="pb-3">
                  Diplomingizni yuklang (pdf)
                </InputLabel>

                <TextField
                  id="pasport"
                  type="file"
                  itemType="PDF"
                  variant="standard"
                  required
                />
              </div>
            </div>
            <Input type="submit" value="Submit" />
          </Form>
        </div>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
