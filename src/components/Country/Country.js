import React from 'react';


const Country = ({con}) => {
    console.log(con)
    return (
        <div className='md:grid grid-cols-3'>
            {
                con.map(singleCountry =><ShowCon singleCountry={singleCountry} key={singleCountry.cca3}></ShowCon> )
            }
        </div>
    );
};

function ShowCon ({singleCountry}){
    return(
        <div>
            <div className='border m-4 hover:shadow-2xl'>
            <div>
                <img className='w-full max-h-48' src={singleCountry.flags.png} alt='flag'></img>
            </div>
            <div>
                <h3 className='font-bold text-2xl mt-4'>{singleCountry.name.common}</h3>
                <p>Population : {singleCountry.population}</p>
                <p>Reagion: {singleCountry.region}</p>
                
            </div>
        </div>
        </div>
    )
}

export default Country;