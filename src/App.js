import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from "./Components/Header";
import Feed from "./Components/Feed";
import SearchResult from "./Components/SearchResult";
import VideoDetails from "./Components/VideoDetails";
import { AppContext } from './Context/contextApi';



function App() {

  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header />
          <Routes>
              <Route path='/' exact element={ <Feed />} />
              <Route path='/SearchResult/:searchQuery' element={ <SearchResult />} />
              <Route path='/video/:id' element={ <VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
