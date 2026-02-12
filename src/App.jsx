import MainFooter from "./Components/Layout/MainFooter";
import MainHeader from "./Components/Layout/MainHeader";
import Home from "./Pages/Home";
const App = () => {
  return (
    <div className="layout flex flex-col min-h-screen bg-primary/50">
      <MainHeader />
      <main className="flex-1">
        <Home />
      </main>
      <MainFooter />

    </div>
  );
};

export default App;