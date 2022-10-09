

// import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Countrys from './Countrys/Countrys';

const Service = ({con,setData}) => {
    // const [con,setcon] = useState([])
    const countrys = useLoaderData();
    // function setData(x){
    //     setcon ([...con,x])
    // }
    console.log(con)
    return (
        <div>
            <div className='p-4 bg-slate-200 fixed left-14 rounded-md'>
            <h2 className='font-bold'>Selected Item: {con.length}</h2>
            </div>
            <div className='md:grid grid-cols-3'>
            {/* {
                countrys.map(country => <Countrys key={country.cca3} country={country} setData={setData}></Countrys>)
            } */}
            {
                countrys.slice(1,21).map(country => <Countrys key={country.cca3} country={country} setData={setData}></Countrys>)
            }
        </div>
        </div>
    );
};

export default Service;