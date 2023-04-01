import React from 'react'
import {useForm} from 'react-hook-form'

export default function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>console.log(data.uname,data.pwd,data.cpwd,data.email);
  return (
    <>
    <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register("uname")} placeholder='Enter Your name'/><br></br>
        <input type='text' {...register("pwd")} placeholder='Enter PWd'/><br></br>
        <input type='text' {...register("cpwd")} placeholder='Enter Confirm PWd'/><br></br>
        <input type='text'{...register("email")} placeholder="enter Emial"/><br></br>
        <button >Register</button>
    </form>
    
    </>
  )
}
