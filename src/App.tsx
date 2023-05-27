import ExpensesChart from "./components/ExpensesChart";
import logo from "./assets/images/logo.svg";
import data from "./data.json";

function CurrentBalance(): JSX.Element {
  return (
    <header className="mb-4 flex items-center justify-between rounded-b-[0.625rem] bg-red-200 px-5 pb-[1.375rem] pt-5 sm:px-8 sm:pb-[1.568rem] sm:pt-[1.69rem]">
      <div>
        <h1 className="text-sm text-white sm:text-base">My balance</h1>
        <p className="text-[1.5rem] font-bold text-card-100 sm:text-lg">
          $921.48
        </p>
      </div>
      <div className="w-[3.75rem] sm:w-[4.5rem]">
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
}

function DailySpending(): JSX.Element {
  return (
    <div className="rounded-t-[0.625rem] bg-card-100 px-5 pt-6 sm:px-10 sm:pt-8">
      <h2 className="mb-[3.25rem] text-[1.5rem] font-bold text-brown-900 sm:text-lg">
        Spending - Last 7 days
      </h2>
      <div className="relative border-b-2 border-[#F8E9DD] pb-6 md:pb-8">
        <ExpensesChart data={data} />
      </div>
    </div>
  );
}

function MonthlyTotalSpending(): JSX.Element {
  return (
    <div className="flex items-end justify-between bg-card-100 px-5 py-6 sm:px-10 sm:pb-10 md:pt-8">
      <div>
        <p className="text-sm text-brown-400 sm:text-base">Total this month</p>
        <p className="text-[1.875rem] font-bold text-brown-900 sm:text-xl">
          $478.33
        </p>
      </div>
      <div>
        <p className="text-right text-sm font-bold text-brown-900 sm:text-base">
          +2.4%
        </p>
        <p className="text-sm text-brown-400 sm:text-base">from last month</p>
      </div>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <article className="w-11/12 max-w-[33.75rem] overflow-hidden rounded-[0.625rem] text-base">
      <CurrentBalance />
      <DailySpending />
      <MonthlyTotalSpending />
    </article>
  );
}

export default App;
