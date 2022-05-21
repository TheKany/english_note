import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<DayList/>}>
            </Route>
            <Route path="/day/:day" element={<Day/>}>
            </Route>
            <Route path="/create_word" element={<CreateWord/>}>
            </Route>
            <Route path="/create_day" element={<CreateDay/>}>
            </Route>
            <Route path="*" element={<EmptyPage/>}>
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
