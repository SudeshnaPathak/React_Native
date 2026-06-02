import './App.css';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import WelcomeCard from "./Components/WelcomeCard";
import InfoCard from "./Components/InfoCard";
import Footer from "./Components/Footer";

function App() 
{
   return (
    <div className="app">
      <Navbar />

      <div className="content-wrapper">
        <Sidebar />

        <main className="main-content">
          <WelcomeCard />
          <InfoCard />
        </main>
      </div>

      <Footer />
    </div>
  ); 
}

export default App;