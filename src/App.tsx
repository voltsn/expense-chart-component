import ExpensesChart from './components/ExpensesChart';
import logo from './assets/images/logo.svg'
import data from './data.json'


function CurrentBalance(): JSX.Element {
  return (
    <header className="bg-red-200 flex items-center justify-between pt-5 px-5 pb-[1.375rem] mb-4 rounded-b-[0.625rem] sm:px-8 sm:pt-[1.69rem] sm:pb-[1.568rem]">
      <div>
        <h1 className='text-white text-sm sm:text-base'>My balance</h1>
        <p className='text-card-100 text-[1.5rem] font-bold sm:text-lg'>$921.48</p>
      </div>
      <div className='w-[3.75rem] sm:w-[4.5rem]'>
        <img src={logo} alt="Logo"/>
      </div>
    </header>
  )
}

function DailySpending(): JSX.Element {

  return (
    <div className='bg-card-100 rounded-t-[0.625rem] pt-6 px-5 sm:pt-8 sm:px-10'>
      <h2 className='font-bold text-[1.5rem] text-brown-900 sm:text-lg mb-[3.25rem]'>Spending - Last 7 days</h2>
      <div className='pb-6 md:pb-8 border-b-2 border-[#F8E9DD]'>
        <ExpensesChart data={data}/>
      </div>
    </div>
  )
}


function MonthlyTotalSpending(): JSX.Element {
  return (
    <div className='bg-card-100 py-6 px-5 md:pt-8 sm:pb-10 sm:px-10 flex items-end justify-between'>
      <div>
        <p className='text-sm text-brown-400 sm:text-base'>Total this month</p>
        <p className='text-brown-900 font-bold text-[1.875rem] sm:text-xl'>$478.33</p>
      </div>
      <div>
        <p className='text-brown-900 font-bold text-sm sm:text-base text-right'>+2.4%</p>
        <p className='text-sm text-brown-400 sm:text-base'>from last month</p>
      </div>
    </div>
  )

}

function App(): JSX.Element {

  return (
    <article className='text-base w-11/12 max-w-[33.75rem] rounded-[0.625rem] overflow-hidden'>
      <CurrentBalance />
      <DailySpending />
      <MonthlyTotalSpending />
    </article>
  )
}

export default App
