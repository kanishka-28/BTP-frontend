import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { addstudent } from "../../services/api";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";



const Add_Student = () => {

    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [roll_number, setroll_number] = useState()


    const OnSubmit = () => {
        Promise.resolve(addstudent({name, email, roll_number})).then((res) => {
            toast.success('Student has been added successfully');
            setname('')
            setroll_number('')
            setemail('')
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="h-screen w-full bg-pink-100 flex items-center justify-center">
            <div className="w-1/4">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Add New Student
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter student's details to register.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Student Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Name"
                                className="h-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Student Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className="h-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Roll Number
                            </Typography>
                            <Input
                                type=""
                                size="lg"
                                placeholder="201240xx"
                                className="h-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={roll_number}
                                onChange={(e) => setroll_number(e.target.value)}
                            />
                        </div>
                        <Button onClick={OnSubmit} className="h-10 mt-6" fullWidth>
                            Add
                        </Button>
                    </form>
                </Card>
            </div>
            <Toaster/>
        </div>
    );
}


export default Add_Student;