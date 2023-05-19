import ExpensesChart from './components/ExpensesChart';
import logo from './assets/images/logo.svg'
import data from './data.json'


function CurrentBalance(): JSX.Element {
  return (
    <header>
      <div>
        <h1>My balance</h1>
        <p>$921.48</p>
      </div>
      <div>
        <img src={logo} alt="Logo"/>
      </div>
    </header>
  )
}

function DailySpending(): JSX.Element {

  return (
    <div>
      <h2>Spending - Last 7 days</h2>
      <div>
        <ExpensesChart data={data}/>
      </div>
    </div>
  )
}


function MonthlyTotalSpending(): JSX.Element {
  return (
    <div>
      <div>
        <h3>Total this month</h3>
        <p>$478.33</p>
      </div>
      <div>
        <p>+2.4%</p>
        <p>from last month</p>
      </div>
    </div>
  )

}

function App(): JSX.Element {

  return (
    <article>
      <CurrentBalance />
      <DailySpending />
      <MonthlyTotalSpending />
    </article>
  )
}

export default App
