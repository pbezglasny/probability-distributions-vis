import React from 'react';
import './App.css';
import Binomial from "./distributions/Binomial"

// const items = [new SideBarItem("bernulli", "Bernulli")];

class App extends React.Component {

    render() {
        return (
            /* <div>
                 <div>
                     <Sidebar items={items}/>
                 </div>
                 <div>
                     <p>adasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                     <li>dasda</li>
                 </div>
             </div>*/
            <Binomial/>
        )
    }
}

export default App;
