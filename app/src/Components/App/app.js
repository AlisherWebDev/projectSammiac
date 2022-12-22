import { Component } from "react";
import "./app.css"
import AppInfo from "../AppInfo/appinfo";
import SearchPanel from "../SearchPanel/searchpanel"
import AppFilter from "../AppFilter/appfilter"
import MovieList from "../MovieList/movielist"
import MovieAddForm from "../MovieAddForm/movieaddform"
import { v4 as uuidv4 } from 'uuid';

class App extends Component{
    constructor (props){
        super(props)
        this.state = {
            data: [
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
        }
    }
     
    onDelete = id => {
       this.setState(({data}) =>({
        data: data.filter(c => c.id !== id)
       }
       ));
    }

    addForm = (item) => {

        this.setState(({data}) =>({
            data: [...data, {...item, id: uuidv4()}]
        }))
                
    }

    render(){ 
        const{data} = this.state
        return(
            <div className="app">
                <div className="content">
                    <AppInfo /> 
                    <div className="appinfo">
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList data={data} onDelete = {this.onDelete} /> 
                    <MovieAddForm addForm= {this.addForm} />
    
                </div>
            </div>
        )
    }
    
}
export default App