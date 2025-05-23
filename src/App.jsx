import { SideNavProvider } from "./context/SideNavContext";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/index";
import SideNav from "./layout/Sidenav/Sidenav";

function App() {
  return (
    <SideNavProvider>
      <div className="App">
        <Navbar />
        <SideNav />
        <Footer />
      </div>
    </SideNavProvider>
  );
}

export default App;
