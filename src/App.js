import ListOfShipments from './components/ListOfShipments/ListOfShipments';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Shipment from './components/Shipment/Shipment';
import SearchSection from './components/SearchSection/SearchSection';
import ShipmentContext from './context/ShipmentContext';
import { useReducer } from 'react';
import { shipmentsReducer } from './reducers/shipmentsReducer';

const App = () => {
  const shipments = JSON.parse(localStorage.getItem('shipments') || '[]');
  const [state, dispatch] = useReducer(shipmentsReducer, { listOfShipments: shipments })
  return (
    <ShipmentContext.Provider value={[state, dispatch]}>
      <Router>
        <Switch>
          <Route path='/shipment/:id' children={
            <Shipment />
          } />
          <Route path='/' children={
            <div className="shipment-page">
              <SearchSection />
              <ListOfShipments />
            </div>
          } />

        </Switch>
      </Router>
    </ShipmentContext.Provider>

  );
}

export default App;
