import { SideNavProvider } from "context/SideNavContext/SideNavProvider";
import Footer from "layout/Footer/Footer";
import Navbar from "layout/Navbar/index";
import SideNav from "layout/Sidenav/Sidenav";
import PopularMovies from "pages/PopularMovies/PopularMovies";
function App() {
  return (
    <SideNavProvider>
      <Navbar />
      <SideNav />
      <PopularMovies />
      <Footer />
    </SideNavProvider>
  );
}

export default App;
