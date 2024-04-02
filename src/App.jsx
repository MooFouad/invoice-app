import Invoices from "./components/Invoices"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="bg-white text-black dark:bg-[#1e081a] dark:text-white min-h-[100vh] duration-300">
        <Navbar />
        <Invoices />
      </div>
    </>
  )
}

export default App
