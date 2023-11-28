import React from 'react'

const Login_input_box = () => {
  return (
    <div class="h-full w-1/2 bg-gray-200 gap-10 flex flex-col items-center" >
      <div className='w-full flex flex-col items-center'>
        <h1 className=''>Email</h1>
        <input type="email" id="email" name="email" class="mt-1 w-3/4 p-2 border rounded-md"></input>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h2>Password</h2>
        <input type="password" id="password" name="password" class="mt-1 w-3/4 p-2 border rounded-md"></input>
      </div>
      <button class="flex w-80 p-4 justify-center items-center rounded-lg bg-blue-500">Login</button>
      <div className=' gap-4 items-center justify-center'>
        <button className='bg-blue-400 rounded-md p-2 w-40 text-center'>Login as new User</button>
        <button className='border rounded-md p-2 border-blue-400 text-center w-40'>Signup</button>
        <div class="items-center">
        <input type="checkbox" id="remember_me" class="form-checkbox"></input>
        <label for="rememberMe" class="ml-2">Remember Me</label>
       </div>
       <button class="text-blue-500 hover:underline focus:outline-none">Forgot Password?</button>
       <button class="flex w-80 p-2 justify-center items-center rounded-lg bg-blue-500">Signup using Google</button>
      </div>
    </div>
  )
}

export default Login_input_box