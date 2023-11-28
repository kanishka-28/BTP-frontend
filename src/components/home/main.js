import React, { useState } from 'react'
import { fetchNames, login, markAttendance } from '../../services/api'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const Main = () => {

    const navigate = useNavigate();
    const [rollNumbers, setrollNumbers] = useState([])

    const mark_attendance = () => {
        Promise.resolve(fetchNames()).then((res) => {
            Promise.resolve(markAttendance(res.data)).then(res => {
                console.log(res);
                toast.success("Attendance marked successfully");
            }).catch((e) => {
                    console.log(e)
                })
        }).catch((e) => {
            console.log(e);
        })
    } 
    const add_student = () => {
        navigate("/add");
    }
    const all_student = () => {
        navigate("/list");
    }
    const check_attendance = () => {
        navigate("/check");
    }

    // favicon
    // https://upload.wikimedia.org/wikipedia/en/4/4c/Official_Logo_of_IIT%28BHU%29%2CVaranasi%2CIndia%2C2013.png
    return (
        <div className="bg-center pt-8 h-screen flex justify-center items-center w-full" >
            <div className='w-3/5 flex flex-wrap gap-12 justify-center'>
                <button onClick={mark_attendance} className='w-60 h-32 text-bold text-xl bg-pink-400 rounded-md p-4 hover:bg-pink-500 shadow-lg my-10 mr-48 transform transition duration-500 hover:scale-110 transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out'>Mark Attendance</button>
                <button onClick={add_student} className='w-60 h-32 text-bold text-xl bg-blue-400 rounded-md p-4 hover:bg-blue-500 shadow-lg my-10 ml-48 transform transition duration-500 hover:scale-110'>Add Students</button>
                <button onClick={check_attendance} className='w-60 h-32 text-bold text-xl bg-yellow-400 rounded-md p-4 hover:bg-yellow-500 shadow-lg my-10 mr-48 transform transition duration-500 hover:scale-110'>Check Attendance</button>
                <button onClick={all_student} className='w-60 h-32 text-bold text-xl bg-green-400 rounded-md p-4 hover:bg-green-500 shadow-lg my-10 ml-48 transform transition duration-500 hover:scale-110'>Student List</button>
            </div>
            <Toaster />
        </div >
    )
}

export default Main