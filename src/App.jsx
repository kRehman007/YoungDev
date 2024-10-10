import Aboutus from "./Components/Aboutus";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Organization from "./Components/Organization";
import Reviews from "./Components/Reviews";
import Test from "./Components/Test";

function App() {
  console.log(window.location.pathname);
  return (
    <>
      <Home />
      <Test />
      <Aboutus />
      <Organization />
      <Reviews />
      <ContactUs />
    </>
  );
}

export default App;
