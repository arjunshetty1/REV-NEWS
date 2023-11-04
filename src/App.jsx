import { NextUIProvider } from "@nextui-org/react";
import TopNavbar from "./Components/TopNavbar";
import NewsBoard from "./Pages/NewsBoard";


const App = () => {
  return (
    <NextUIProvider>
      <TopNavbar />
      <NewsBoard/>
    </NextUIProvider>
  );
};

export default App;
