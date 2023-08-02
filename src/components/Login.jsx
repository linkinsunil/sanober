import logo from '../assets/logo1.png';
import lock from '../assets/lock.png';
import usernameLogo from '../assets/usernameLogo.png';
import { useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  useEffect(() => {
    const getUserData = async () => {
      try {
        console.log('first');
        const res = await axios.post(
          'http://veggi-app-v2.adriit.com/api/vendor/login',
          { mobile_no: 9600000011, password: 'Test@1234' }
        );

        console.log('RES', res);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();

    console.log('form submitted');
  };

  return (
    <div className='flex items-center flex-col p-10 w-[22rem] pt-8'>
      <img src={logo} alt='company name' className='w-48' />
      <p className='font-normal text-2xl my-1'>
        Welcome <strong>Back</strong>
      </p>
      <p className='mb-12'>Sign in to continue</p>
      <form className='w-full' onSubmit={handleSubmit}>
        <div className='flex items-center shadow-md mb-4 w-full rounded-md border-l-4 border-teal-600'>
          <img src={usernameLogo} alt='' className='h-4 pl-4' />
          <input
            className='p-3 pl-2 outline-none w-full text-xs'
            placeholder='Enter username/Email'
          />
        </div>
        <div className='flex items-center shadow-md mb-5 w-full rounded-md border-l-4 border-teal-600'>
          <img src={lock} alt='' className='h-4 pl-4' />
          <input
            className='p-3 pl-2 outline-none w-full text-xs'
            placeholder='Enter password'
          />
        </div>
        <button
          type='submit'
          className='rounded-md bg-gradient-to-r from-teal-600 to-teal-400 p-3 w-full font-semibold text-[0.9674rem] mb-3 text-white'
        >
          Login
        </button>
      </form>
      <p className='text-xs font-normal'>
        Don’t have a account yet ?{' '}
        <span className='text-[#25868D] font-medium'>Get Register</span>
      </p>
    </div>
  );
};

export default Login;
