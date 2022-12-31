import { useState } from "react";
import AppInfo from "../AppInfo/appinfo";
import SearchPanel from "../SearchPanel/searchpanel";
import AppFilter from "../AppFilter/appfilter";
import MovieList from "../MovieList/movielist";
import MovieAddForm from "../MovieAddForm/movieaddform";
import { v4 as uuidv4 } from "uuid";
import "./app.css";

const App = () => {
  const [data, setData] = useState(arr);

  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // ==================== onDelete Function

  const onDelete = (id) => {
    const newArr = data.filter(c =>( c !== c.id));
    setData(newArr);
  };
  // ==================== addForm Function

  const addForm = (item) => {
    const newItem = {
      name: item.name,
      viewers: item.viewers,
      id: uuidv4(),
      favourite: false,
      like: false,
    };
    const newArr = [...data, newItem];
    setData(newArr);
  };
  // ==================== onToggleProp Function

  const onToggleProp = (id, prop) => {
    const newArr = data.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    });
    setData(newArr);
  };

  // ==================== searchHandler Function

  const searchHandler = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
  };

  // ========== filterHandler ==================
  const filterHandler = (arr, filter) => {
    switch (filter) {
      case "popular":
        return arr.filter((c) => c.like);
      case "mostViewers":
        return arr.filter((c) => c.viewers > 500);
      default:
        return arr;
    }
  }
  //  ==================== updateTermHandler Function
  const updateTermHandler = (term) => setTerm(term)

  // ========== updateFilterHandler function ==================
  const updateFilterHandler = (filter) => setFilter(filter)

  return (
    <div className="app">
      <div className="content">
        <AppInfo
          allMoviesCount={data.length}
          favouriteCount={data.filter((c) => c.favourite).length}
        />
        <div className="appinfo">
          <SearchPanel updateTermHandler={updateTermHandler} />
          <AppFilter
            filter={filter}
            updateFilterHandler={updateFilterHandler}
          />
        </div>
        <MovieList
          onToggleProp={onToggleProp}
          data={filterHandler(searchHandler(data, term), filter)}
          onDelete={onDelete}
        />
        <MovieAddForm addForm={addForm} />
      </div>
    </div>
  );
};
export default App;
const arr = [
  {
    id: 1,
    name: "Sherlock Holmes",
    viewers: 934,
    favourite: false,
    like: false,
  },
  {
    id: 2,
    name: "Venzday Adamslar oilasi",
    viewers: 576,
    favourite: false,
    like: false,
  },
  { id: 3, name: "Qat'iyat", viewers: 857, favourite: false, like: false },
  {
    id: 4,
    name: "Forrest Gamp",
    viewers: 587,
    favourite: false,
    like: false,
  },
] 