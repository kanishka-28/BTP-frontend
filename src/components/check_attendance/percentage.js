import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getstudents } from "../../services/api";


const Percentage = (attendance) => {

    const countP = attendance?.attendance?.filter(item => item === 'P').length;
    var total = attendance?.attendance?.length;
    var perc = (countP / total) * 100;
    perc = perc.toFixed(2);

    return (
        <div className="flex gap-20 items-center justify-end">
            <Typography variant="small" color="blue-gray" className="w-10 font-normal">
                {perc}%
            </Typography>
            {perc < 33 ?
                <button className='w-28 bg-red-400 rounded-md p-4 hover:bg-red-500 shadow-lg transform transition duration-500 hover:scale-110'>Send mail</button>
                :
                <button className='w-28 bg-green-500 rounded-md p-4 shadow-lg pointer-events-none'>Safe</button>
            }
        </div>
    );
}

export default Percentage;