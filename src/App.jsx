import Grain from "./components/Grain";
import StreakRail from "./components/StreakRail";
import Header from "./components/Header";
import About from "./components/About";
import Stack from "./components/Stack";
import Shipped from "./components/Shipped";
import Builds from "./components/Builds";
import Compiled from "./components/Compiled";
import Origins from "./components/Origins";
import Connect from "./components/Connect";

export default function App() {
  return (
    <div className="relative bg-ink min-h-screen">
      <Grain />
      <StreakRail />
      <main>
        <Header />
        <About />
        <Stack />
        <Shipped />
        <Builds />
        <Compiled />
        <Origins />
        <Connect />
      </main>
    </div>
  );
}
