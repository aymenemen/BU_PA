import React, { useEffect, useState } from 'react'
import DarkMode from './darkMode'
import logo from '../assets/logoSlogan.png'
import logoLight from '../assets/logoLight.png'
import userLight from '../assets/user (2).png'
import user from '../assets/user (1).png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../states'


const Login = () => {
    const [formDataL,setFormDataL]=useState([])
    const [formDataR,setFormDataR]=useState([{}])
    const [isDark,setIsDark]=useState();
    const [account,setAccount]=useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate=useNavigate()
    const dispatch=useDispatch()
    
     
    useEffect(() => {
        let darkClass = Boolean(localStorage.getItem('darkMode'));
        setIsDark(darkClass)
        console.log(darkClass);
        
      },[] );
      const register = async () => {
        
        const savedUserResponse = await fetch(
          "http://localhost:3005/auth/register",
          {
            method: "POST",
            body: formDataR,
          }
        );
        const savedUser = await savedUserResponse.json();
        
    
        if (savedUser) {
          console.log("Registration successful");
          setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setFile(null);
                setAccount(!account);
        }
      };
     
    

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmitL = async (e) => {
        e.preventDefault();
        try {
          const loggedInResponse = await fetch("http://localhost:3005/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email: email, password: password }),
          });
          const loggedIn = await loggedInResponse.json();
  
          if (loggedIn.token) {
             
              console.log("Login successful");
              dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        }))
              localStorage.setItem("token", loggedIn.token);
              
              navigate("/dashboard");
          } else {
               
              console.error("Login failed:", loggedIn.msg);
              // For example, you can display an error message to the user
              alert("Login failed. Please check your credentials.");
          }
      } catch (error) {
          // Handle any network errors or unexpected exceptions here
          console.error("Login failed:", error);
          alert("An error occurred during login. Please try again later.");
      }
  
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

  
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
      if (file) {
          console.log("Selected file:", file.name);
         
      }
  };
  
    const handleSubmitR = async (e) => {
        e.preventDefault();
        if(password==confirmPassword){
        setFormDataR([ {
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            picture:file.name,}
        ])
        try {
          await register(); // Call register function
          
      } catch (error) {
          console.error("Registration failed:", error);
      }
      }else{
            alert('passes don\'t match' )
        }
       
    };
    




  
  return (
<>
  <DarkMode setIsDark={setIsDark}/>
  <div className='grid lg:grid-cols-2 lg:ml-32 mt-10 md:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 sm:mx-0' >
        <div className='sm:hidden xs:hidden lg:block md:hidden'>
            {isDark?<img src={logoLight}  alt="" />:<img src={logo} />}
        </div>
        {account? <div className="w-full max-w-sm p-4 ml-32  bg-stone-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="max-w-md mx-auto mt-10" onSubmit={(e)=>{handleSubmitL(e)}}>
              
              <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">Sign in to our platform</h5>
              <div className="relative z-0 w-full mb-5 group mt-10">
                  <input type="email" name="floating_email" onChange={handleEmail} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div className="relative z-0 w-full mt-6 group">
                  <input type="password" onChange={handlePassword} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />     
                  <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>

              <button type="submit"  className="text-white mt-20 mb- bg-emerald-800  hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-800">Sign in</button>
              <p className='dark:text-white  mt-4'>Don't have an account ? <a className=' text-emerald-800 hover:scale-105 hover:underline hover:cursor-pointer ' onClick={()=>{setAccount(!account)}}>create one</a></p>
          </form>
        </div> :
        <div className="w-full max-w-sm p-4 ml-32 mt- bg-stone-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="max-w-md mx-auto my-3" onSubmit={(e)=>{handleSubmitR(e)}}>
              
              <h5 className="text-xl text-center text-emerald-900 font-bold dark:text-white">Create an account</h5>
              <div className="relative z-0 w-full mb-5 group mt-6">
                  <input type="text" name="floating_Fname" onChange={handleFirstNameChange} id="floating_Fname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_Fname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group mt-6">
                  <input type="text" name="floating_Lname" onChange={handleLastNameChange} id="floating_Lname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_Lname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
              </div>
              <div className="relative z-0 w-full mb-5 group mt-6">
                  <input type="email" name="floating_email" id="floating_email" onChange={handleEmail} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
                  <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div className="relative z-0 w-full mt-6 group">
                  <input type="password" name="floating_password" onChange={handlePassword} id="floating_passwordR" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />     
                  <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              <div className="relative z-0 w-full mt-6 group">
                  <input type="password" onChange={handleConfirmPasswordChange} name="floating_password" id="floating_passwordC" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />     
                  <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
              </div>
              
              <label className="block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-gray-400" htmlFor="file_input">Profile image</label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-emerald-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" onChange={handleFileChange} type="file"/>

              <button type="submit" className="text-white mt-10 mb-auto bg-emerald-800  hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-800">Create</button>
              <p className='dark:text-white  mt-4'>already have an account ? <a className=' text-emerald-800 hover:scale-105 hover:underline hover:cursor-pointer ' onClick={()=>{setAccount(!account)}}>Create account</a></p>
          </form>
        </div>}
  </div>
</>
  )
}

export default Login
