import React from 'react'

const Signup_input_box = () => {
  return (
  <>
      
     <div class="h-full w-1/2 bg-gray-200 gap-6 flex flex-col items-center" >
      <div className='w-full flex flex-col items-center'>
        <h1 className=''>Email</h1>
        <input type="email" id="email" name="email" class="mt-1 w-3/4 p-2 border rounded-md"></input>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h2>Username</h2>
        <input type="username" id="username" name="username" class="mt-1 w-3/4 p-2 border rounded-md"></input>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h1 className=''>Password</h1>
        <input type="password" id="password" name="password" class="mt-1 w-3/4 p-2 border rounded-md"></input>
      </div>
      <div className='w-full flex flex-col items-center'>
        <h1 className=''>Confirm Password</h1>
        <input type="confirm_password" id="confirm_password" name="confirm_password" class="mt-1 w-3/4 p-2 border rounded-md"></input>
      </div>
      <div class="items-center">
        <input type="checkbox" id="read_terms _and_conditions" class="form-checkbox"></input>
        <label for="read_terms_and_conditions" class="ml-2">I accept the terms of service and privacy policy. </label>
       </div>

      <button class="flex w-80 p-4 justify-center items-center rounded-lg bg-blue-50 hover:bg-blue-600">Signup</button>
      
      
    </div>

    </>
  )
}

export default Signup_input_box