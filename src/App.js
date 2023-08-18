import React from 'react';
import { Header,Content,Footer} from './func-components'
import Calendar from './class-components'
import Button from './class-components2'
import {Calculator2} from './calculator'
import {EventData2} from './event-data'
import Banner from './banner'
function App() {

  return (
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Banner/>
      <Calculator2/>
      <EventData2/>
      <Button/>
      <Footer/>
    </>
  );
}

export default App;

