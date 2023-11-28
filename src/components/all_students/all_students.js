import { Card, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getstudents } from "../../services/api";

const TABLE_HEAD = ["Roll Number", "Name", "Email"];


const All_Students = () => {

    const [data, setdata] = useState([])
    const [edit, setedit] = useState()
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [roll_number, setroll_number] = useState()


    useEffect(() => {
        Promise.resolve(getstudents()).then((res) => {
            // console.log(res);
            setdata(res.data.students)
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
                    {data.map(({ roll_number, name, email }, index) => (
                        <tr key={roll_number} className="even:bg-blue-gray-50/50">
                            {edit ?
                                <>
                                    <td className="p-4">
                                        <Input
                                            size="lg"
                                            placeholder="Name"
                                            className="h-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            value={roll_number}
                                            onChange={(e) => setroll_number(e.target.value)}
                                        />
                                    </td>
                                    <td className="p-4">
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
                                    </td>
                                    <td className="p-4">
                                        <Input
                                            size="lg"
                                            placeholder="Name"
                                            className="h-10 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none",
                                            }}
                                            value={email}
                                            onChange={(e) => setemail(e.target.value)}
                                        />
                                    </td>
                                </>
                                :
                                <>
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
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {email}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography onClick={() => setedit(true)} as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                            Edit
                                        </Typography>
                                    </td>
                                </>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}

export default All_Students;