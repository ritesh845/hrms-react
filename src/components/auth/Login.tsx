import React,{useCallback,useState} from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const schema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
}).required();

interface LoginFormData {
    email:String;
    password:String;
}

const  Login:React.FC = () => {

    const [error, setError] = useState<String>("");

    const { register, handleSubmit, formState:{ errors } } = useForm<LoginFormData>({
        resolver: yupResolver(schema)
      });

    const onSubmit = useCallback((formValues: LoginFormData) => {
        axios.post(process.env.REACT_APP_API_URI+'login',formValues).then(function (res) {
            let response = res.data;
            console.log(response);
            setError("");
          })
          .catch(function (err) {
              let res = err.response.data;
              if(res.code === 401){
                  setError(res.message);
              }
          });

    }, []);

return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
       
      </div>
      <div className={"max-w-md w-full text-center bg-red-100 p-2 rounded "+ (error === '' ? 'hidden' : '')}>
            <h3 className="text-red-800" id='error-cred'>{error}</h3>
      </div>
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div className='mb-3'>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              type="email"
              {...register('email')}
              autoComplete="email"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <p className='text-red-500'>{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password')}
              autoComplete="current-password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
             <p className='text-red-500'>{errors.password?.message}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          {/* <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div> */}
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
);
}
export default Login;
