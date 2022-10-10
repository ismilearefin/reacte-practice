

// import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Countrys from './Countrys/Countrys';
import Showdata from './Showdata';

const Service = ({setData}) => {
    // const [con,setcon] = useState([])
    const countrys = useLoaderData();
    // function setData(x){
    //     setcon ([...con,x])
    // }
    // console.log(con)
    return (
        <div>
            <Showdata></Showdata>
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