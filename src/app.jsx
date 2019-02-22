import React, { Component } from 'react';
// import Navbar from './component/navbar';
// import MainPage from './component/mainpage';
// import Footer from './component/footer';
import Page from './component/hours';
import App1 from './component/app1';
import Card from './component/card';


class App extends Component {
    render() { 
        return ( 
            <div>
                {/* <Navbar />
                <MainPage />
                <Footer /> */}
                <Page />
                <App1 />
                <Card />
            </div>
         );
    }
}
 
export default App;