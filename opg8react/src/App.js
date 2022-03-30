import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Actors from './components/Actors';
import Movies from './components/Movies';
import Actor from './components/Actor';
import Movie from './components/Movie';
import Navigation from './components/Navigation';


function App() {

  const [data, setData] = useState('')
  const [actor, setActor] = useState('')

  return (
    <>
        <Navigation />
      <div className='bg-' >
        <Routes >
          <Route index element={<Movies data={data} setData={setData} />} />
          <Route path="actors">
            <Route index element={<Actors actor={actor} setActor={setActor} />} />
            <Route path=":name" element={<Actor actor={actor} />} />
          </Route>
          <Route path="movies">
            <Route index element={<Movies data={data} setData={setData} />} />
            <Route path=":name" element={<Movie data={data} />} />
          </Route>

        </Routes>
      </div>
      <footer className='border-4 border-slate-900 bg-gray-300 p-7 flex justify-between'>
        
      </footer>
    </>
  );
}


export default App;
