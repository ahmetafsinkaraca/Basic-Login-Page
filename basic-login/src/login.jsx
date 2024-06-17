import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './form';


export default function Login() {

  const [username, setUsername] = useState("sdfsdfsdf")
  const [usernameError, setUsernameError] = useState("")
  const [email, setEmail] = useState("fsdfs@gmail.com")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("asdfghjklş")
  const [passwordError, setPasswordError] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("asdfghjklş")
  const [passwordConfirmError, setPasswordConfirmError] = useState("")
  const [date, setDate] = useState("2021-02-03")
  const [dateError, setDateError] = useState("")
  const [about, setAbout] = useState("fferfreferf")
  const [aboutError, setAboutError] = useState("")
  const [image, setImage] = useState()
  const [imageError, setImageError] = useState()
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false);




  const validateUsername = () => {
    setUsernameError("");

    if ("" === username) {
      setUsernameError("Please enter your username")
      return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(username)) {
      setUsernameError("Please enter a valid username")
      return false;
        }
        return true;

  };

  const validateEmail = () => {
    setEmailError("")
    if (!email.trim()) {
      setEmailError("Please enter your email")
      return false;

    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) {
      setEmailError("Please enter a valid email")
      return false;

    }
    return true;

  };

  const validatePassword = () => {
    setPasswordError("")
    if ("" === password) {
      setPasswordError("Please enter a password")
      return false;

    }

    if (password.length < 8) {
      setPasswordError("The password must be 8 characters or longer")
      return false;

    }
    return true;

  };

  const validatePasswordConfirm = () => {
    setPasswordConfirmError("")
    if ("" === passwordConfirm) {
      setPasswordConfirmError("Please enter a password confirm")
      return false;

    }

    if (passwordConfirm !== password) {
      setPasswordConfirmError("The password confirm must be the same as password")
      return false;

    }

    return true;

  };

  const validateDate = () => {
    setAboutError("")

    const currentDate = new Date();
    const dateOther = new Date();
    dateOther.setFullYear(currentDate.getFullYear() - 1);

    if (!date) {
      setDateError("Please enter your date")
      return false;

    }

    if (new Date(date) > dateOther) {
      setDateError("Please enter a valid date")
      return false;

    }

    return true;

  };

  const validateAbout = () => {
    setAboutError("")
    if ("" === about) {
      setAboutError("Please enter your about")
      return false;

    }

    if (about.length > 200) {
      setAboutError("Please enter a valid about")
      return false;

    }

    return true;

  };

  const validateImage = async (selectedFile) => {
    setImageError("")
    if (!image) {
      setImageError("Please select your image")
      return false;

    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      setImageError("Please enter a valid image")
      return false;

    }

    return true;

  };



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    validateUsername();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };

  const handleConfirmPasswordChange = (e) => {
    setPasswordConfirm(e.target.value);
    validatePasswordConfirm();
  };

  const handleBirthdayChange = (e) => {
    setDate(e.target.value);
    validateDate();
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
    validateAbout();
  };

  const validateForm = () => {
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPasswordConfirmValid = validatePasswordConfirm();
    const isDateValid = validateDate();
    const isAboutValid = validateAbout();
    const isImageValid = validateImage();

    return (
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPasswordConfirmValid &&
      isDateValid &&
      isAboutValid &&
      isImageValid
    );
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    
      const imageUrl = URL.createObjectURL(selectedFile);
      setImage(imageUrl);
      validateImage(); // Resim değiştikçe doğrulama yap
    
  };

  const handleSubmitChange = async  (e) => {
    e.preventDefault()

    try {
      const isFormValid = validateForm();
      if (isFormValid) {
        // Koşullar sağlandığında sayfaya yönlendir
        await navigate('/form', { state: { username, email, password, date, about, image } });
      } else {
        // Form geçerli değilse hata işlemleri burada yapılabilir
        console.log('Form is not valid');
      }
    } catch (error) {
      console.error('Hata oluştu:', error.message);
      setFormValid(false);
    }
  };


  return (
    <div className='bg-slate-400 flex justify-center items-center h-screen sm:h-1/2 lg:h-screen'>
      <form className="w-full max-w-lg  bg-slate-400" onSubmit="return false">
        <div className="flex flex-wrap -mx-3 mb-6 ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Username
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text" placeholder="username" onChange={handleUsernameChange} value={username} onClick={validateUsername} />
            <p className="text-red-500 text-xs italic">{usernameError}</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              email
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text" placeholder="email" onChange={handleEmailChange} value={email} onClick={validateEmail} />
            <p className="text-red-500 text-xs italic">{emailError}</p>
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password" placeholder="******************" onChange={handlePasswordChange} value={password} onClick={validatePassword} />
            <p className="text-red-500 text-xs italic">{passwordError}</p>
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password Confirm
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password" placeholder="******************" onChange={handleConfirmPasswordChange} value={passwordConfirm} onFocus={validatePasswordConfirm} />
            <p className="text-red-500 text-xs italic">{passwordConfirmError}</p>
          </div>
        </div>
        <div className="flex items-center justify-center mb-6">
          <div className=" w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              birthday
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="date" placeholder="DD.MM.YYYY" onChange={handleBirthdayChange} value={date} onClick={validateDate} />
            <p className="text-red-500 text-xs italic">{dateError}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              about
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="" id="" cols="30" rows="10" placeholder='about...' onChange={handleAboutChange} value={about} onClick={validateAbout}></textarea>
            <p className="text-red-500 text-xs italic">{aboutError}</p>
          </div>
        </div>
        <div className='flex flex-wrap justify-between mt-6'>
          <div className="w-1/2">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"  onChange={handleImageChange} onClick={validateImage} accept="image/png, image/jpeg"/>
            <p className="text-red-500 text-xs italic">{imageError}</p>
          </div>
          <div className="w-1/4">
            <button className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer"
             onClick={handleSubmitChange} >Button</button>
          </div>
        </div>
      </form>
    </div>

  );
}

