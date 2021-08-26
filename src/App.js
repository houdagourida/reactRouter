import { useState } from "react";
import "./App.css";
import List from "./component/List";
import { moviesData } from "./movieData";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./component/Search";
import AddMovie from "./component/AddMovie";
import { Link, Route, Switch } from "react-router-dom";
import MovieDitaile from "./component/MovieDetails";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [search, setSearch] = useState("");
  const handleSearch = (input) => {
    setSearch(input);
  };
  const [rate, setRate] = useState(1);
  const handleRate = (rating) => {
    setRate(rating);
  };
  return (
    <div className="App">
      <Search handleSearch={handleSearch} handleRate={handleRate} />
      <Link to="/add">
        <h1>Add Movie</h1>
      </Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <List
              {...props}
              films={movies.filter(
                (elt) =>
                  elt.name
                    .toLowerCase()
                    .includes(search.toLowerCase().trim()) && elt.rating >= rate
              )}
            />
          )}
        />
        <Route
          path="/add"
          render={(props) =>
             <AddMovie {...props} handleAdd={handleAdd} />}
        />
        <Route path="/movieditaile/:x" render={(props) =>
          ( <MovieDitaile {...props} movies={movies}/>)} />
      </Switch>
    </div>
  );
}

export default App;
