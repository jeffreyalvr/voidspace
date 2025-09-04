import "./styles/global.css";

import Header from "./components/Header";

import Routes from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 w-full h-full md:p-10 items-center">
        <Routes />
      </main>
    </>
  );
};

export default App;
