

const Countrys = ({country,setData}) => {
    // console.log(country)
    return (
        <div className='border m-4 hover:shadow-2xl'>
            <div>
                <img className='w-full max-h-48' src={country.flags.png} alt='flag'></img>
            </div>
            <div>
                <h3 className='font-bold text-2xl mt-4'>{country.name.common}</h3>
                <p>Population : {country.population}</p>
                <p>Reagion: {country.region}</p>
                <button onClick={()=>setData(country)} type="button" className='w-full bg-blue-700 py-2 mt-4 text-white font-bold'>Select</button>
            </div>
        </div>
    );
};

export default Countrys;