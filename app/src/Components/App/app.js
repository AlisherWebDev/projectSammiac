import "./app.css"
import AppInfo from "../AppInfo/appinfo";
import SearchPanel from "../SearchPanel/searchpanel"
import AppFilter from "../AppFilter/appfilter"
import MovieList from "../MovieList/movielist"
import MovieAddForm from "../MovieAddForm/movieaddform"
const App = () =>{
    const data = [
        {
            id: 1,
            name: "Sherlock Holmes",
            viewers: 234,
            favourite: false
        },
        {
            id: 2,
            name: "Venzday Adamslar oilasi",
             viewers: 576,
             favourite: false
         },
        {
            id: 3,
            name: "Qat'iyat",
            viewers: 457,
            favourite: false
        },
        {
            id: 4,
            name: "Forrest Gamp",
            viewers: 7687,
            favourite: false
        },
    ]
    return(
        <div className="app">
            <div className="content">
                <AppInfo /> 
                <div className="appinfo">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <MovieList data={data} /> 
                <MovieAddForm />

            </div>
        </div>
    )
}
export default App