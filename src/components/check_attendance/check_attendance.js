import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getstudents } from "../../services/api";
import Percentage from "./percentage";

const TABLE_HEAD = ["Roll Number", "Name", "Total Classes"];

const Check_Attendance = () => {

    const [data, setdata] = useState([])
    const [edit, setedit] = useState()
    const [present, setpresent] = useState(0)
    // const [attendance, setattendance] = useState()

    useEffect(() => {
        Promise.resolve(getstudents()).then((res) => {
            // console.log(res);
            setdata(res.data.students)
            // setattendance(res.data.students.attendance)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <Card className="bg-pink-100 h-screen w-full p-20">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-gray-300 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold text-md leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ roll_number, name, attendance }, index) => (
                        <>
                            <tr key={roll_number} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {roll_number}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="pl-10 font-normal">
                                        {attendance?.length}
                                    </Typography>
                                </td>
                                {attendance?.map((data) => {
                                    return (
                                        <td className="p-4">
                                            <Typography onClick={() => setedit(true)} as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                                {data}
                                            </Typography>
                                        </td>
                                    )
                                })}
                                <td className="p-4">
                                    <Percentage attendance={attendance} />
                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default Check_Attendance;