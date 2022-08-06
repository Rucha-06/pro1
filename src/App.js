import './App.css';
import SearchBar from './components/SearchBar';
import Nav from './components/Nav';
import NotesArea from './components/NotesArea';
import { useState } from 'react';

function App() {
  const [searchNotes, setSearchNotes]=useState('');
  return (
    <div className="App">
     <Nav/>
     <SearchBar setSearchNotes={setSearchNotes}/>
     <NotesArea SearchNotes={setSearchNotes}/>
    </div>
  );
}

export default App;
