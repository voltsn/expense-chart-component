import ExpensesChart from './components/ExpensesChart';
import logo from './assets/images/logo.svg'
import data from './data.json'


function CurrentBalance(): JSX.Element {
  return (
    <header className="bg-red-200 flex items-center justify-between pt-5 px-5 pb-[1.375rem] mb-4 rounded-b-[0.625rem]">
      <div>
        <h1 className='text-white text-sm md:text-base'>My balance</h1>
        <p className='text-card-100 text-[1.5rem] font-bold md:text-lg'>$921.48</p>
      </div>
      <div className='w-[3.75rem]'>
        <img src={logo} alt="Logo"/>
      </div>
    </header>
  )
}

function DailySpending(): JSX.Element {

  return (
    <div className='bg-card-100 rounded-t-[0.625rem] pt-6 px-5'>
      <h2 className='font-bold text-[1.5rem] text-brown-900 md:text-lg mb-[3.25rem]'>Spending - Last 7 days</h2>
      <div className='pb-[3.125rem]'>
        <ExpensesChart data={data}/>
      </div>
    </div>
  )
}


function MonthlyTotalSpending(): JSX.Element {
  return (
    <div className='bg-card-100 pb-6 px-5 flex items-center justify-between'>
      <div>
        <p className='text-sm text-brown-400'>Total this month</p>
        <p className='text-brown-900 font-bold text-[1.875rem]'>$478.33</p>
      </div>
      <div>
        <p className='text-brown-900 font-bold text-sm'>+2.4%</p>
        <p className='text-sm text-brown-400'>from last month</p>
      </div>
    </div>
  )

}

function App(): JSX.Element {

  return (
    <article className='text-base w-11/12 rounded-[0.625rem] overflow-hidden'>
      <CurrentBalance />
      <DailySpending />
      <MonthlyTotalSpending />
    </article>
  )
}

export default App
