import React ,{useState} from 'react'


export default function MainPage() {

    const [date, setDate] = useState(null);
    const [sourceCurrency, setSourceCurrency] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState("0");
    const [amountInTargetCurrency, setAmountInTargetCurrency] = useState("0");
    
    return (
        <div>
            <h1 className='text-5xl font-bold text-green-600 lg:mx-32' >Convert Your Currencies</h1>
            <p className='py-8 lg:mx-32 text-m opacity-40'>The Currency Converter web application is your go-to tool for quick and accurate currency conversion. Whether you're a world traveler, international business professional, or simply curious about exchange rates, this user-friendly application simplifies the process of converting one currency to another.</p>
            <div className='flex-col justify-center mt-5 flex-center'>
                <section className='w-full mx-auto lg:w-1/2'>
                    <form>
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
                                </select>
                    </div>
                        </div>

                        <div>
                        <div className="mb-6">
                            <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                            <select onChange={(e) => setTargetCurrency(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" name={targetCurrency} id={targetCurrency} > 
                                <option value="">--Select Target Currency--</option>
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
        </div>
    )
}
