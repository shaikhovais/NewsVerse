import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Search from "./Components/Search/Search";
import Topics from "./Components/Topics/Topics";
import Loader from "./Components/Loader/Loader";
import NoResult from "./Components/NoResult/NoResult";

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('World');
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const [noResult, setNoResult] = useState(false);
  const [country, setCountry] = useState('us');

  return (
    <div className="App">
      <Header setCountry={setCountry} setData={setData} setLoading={setLoading} setNoResult={setNoResult}/>
      <Topics
        setData={setData}
        country={country}
        category={category}
        setCategory={setCategory}
        setLoading={setLoading}
        noResult={noResult}
        setNoResult={setNoResult}
        loading={loading}
      />
      <Search
        setData={setData}
        category={category}
        setCategory={setCategory}
        setLoading={setLoading}
        noResult={noResult}
        setNoResult={setNoResult}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        country={country}
      />
      <News data={data} />
      {loading ? <Loader /> : null}
      {noResult ? <NoResult /> : null}
    </div>
  );
}

export default App;
