import React ,{useEffect, useState} from 'react'
import axios from 'axios';


export default function MainPage() {

    const [date, setDate] = useState('');
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState("0");
    const [amountInTargetCurrency, setAmountInTargetCurrency] = useState("0");
    const[currencyNames, setCurrencyNames] = useState([]);

    useEffect(() => {
        const getCurrencyNames = async () => {
            try{
                const responce = await axios.get("http://localhost:5000/getAllCurrencies")
                setCurrencyNames(responce.data)
                console.log(responce.data)
            }
            catch(error){
                console.log(error)
            }
            
        }
        getCurrencyNames();
    },[])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const responce = await axios.get("http://localhost:5000/convert",{
                params: {
                    date,
                    sourceCurrency,
                    targetCurrency,
                    amountInSourceCurrency,
                },
            });
            setAmountInTargetCurrency(responce.data);
            
        } catch(error){
            console.error(error)
        }
    }
    
    return (
        <div>
            <h1 className='text-5xl font-bold text-green-600 lg:mx-32' >Convert Your Currencies</h1>
            <p className='py-8 lg:mx-32 text-m opacity-40'>The Currency Converter web application is your go-to tool for quick and accurate currency conversion. Whether you're a world traveler, international business professional, or simply curious about exchange rates, this user-friendly application simplifies the process of converting one currency to another.</p>
            <div className='flex-col justify-center mt-5 flex-center'>
                <section className='w-full mx-auto lg:w-1/2'>
                    <form onSubmit={handleSubmit}>
                        <div>
                        <div className="mb-6">
                            <label htmlFor={Date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                            <input onChange={(e) => setDate(e.target.value)} type= "date" id={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Select Date" required/>
                    </div>
                        </div>

                        <div>
                        <div className="mb-6">
                            <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                            <select onChange={(e) => setSourceCurrency(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name={sourceCurrency} id={sourceCurrency} > 
                                <option value="">--Select Currency--</option>
                                {Object.keys(currencyNames).map((currency) => (
                                    <option className='p-1' key={currency} value={currency}>{currencyNames[currency]}</option>
                                ))}
                                </select>
                    </div>
                        </div>

                        <div>
                        <div className="mb-6">
                            <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                            <select onChange={(e) => setTargetCurrency(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name={targetCurrency} id={targetCurrency} > 
                                <option value="">--Select Target Currency--</option>
                                {Object.keys(currencyNames).map((currency) => (
                                    <option className='p-1' key={currency} value={currency}>{currencyNames[currency]}</option>
                                ))}
                                </select>
                    </div>
                        </div>

                        <div>
                        <div className="mb-6">
                            <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount IN Source Currency</label>
                            <input onChange={(e) => setAmountInSourceCurrency(e.target.value)} type="number" id={amountInSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Enter Amount" required/>
                    </div>
                        </div>

                        <button className='px-4 py-2 font-bold text-white bg-green-700 rounded hover:bg-green-800'>Get The Target Currency</button>
                        
                    </form>
                </section>
            </div>
            <br/>
            <section className='w-full mx-auto mt-4 text-[24px] lg:w-1/2'>
            {amountInSourceCurrency} {currencyNames[sourceCurrency]} is equal to {""} <span className='text-green-600'>{amountInTargetCurrency}</span> in {currencyNames[targetCurrency]}.
            </section>
                </div>
    )
}
