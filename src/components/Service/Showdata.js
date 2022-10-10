import React, { useContext } from 'react';
import { newContext } from '../../App';

const Showdata = () => {
    const show = useContext(newContext)
    return (
        <div className='p-4 bg-slate-200 fixed left-14 rounded-md'>
            <h2 className='font-bold'>Selected Item: {show.length}</h2>
            </div>
    );
};

export default Showdata;