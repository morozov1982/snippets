import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Masonry from 'masonry-layout';
//import {changeHandler, searchHandler} from './assets/searchHandlers';

function App() {

  const [photo, setPhoto] = useState("car");
  const [clientId, setClientId] = useState("498e8b1defac8fbf3a07285502bfbd2e2035e700774afc8cd0217b6b3aa6c2b9");

  const [result, setResult] = useState([]);

  const changeHandler = (e) => {
    setPhoto(e.target.value);
  };

  const searchHandler = (e) => {
    console.log(photo);

    const url = "https://api.unsplash.com/search/photos/?page=1&client_id=" + clientId + "&query=" + photo;

    axios.get(url)
      .then((response) => {
        console.log(response);
        setResult(response.data.results);
      })
  };

  return (
    <div className="App">
      <h1>Поиск фотографий Unsplash в ReacrJS</h1>
      <input onChange={changeHandler} type="text" name="search" id="search" placeholder="Чё ищем?" />
      <button onClick={searchHandler} type="submit">Искать</button>

      <div className="container">
        {result.map((photo, i) => (
          <div className="card" key={photo.id}>{'Индекс: ' + i}
            <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
