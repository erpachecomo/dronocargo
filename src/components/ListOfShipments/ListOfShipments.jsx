import React, { useContext } from 'react'
import ShipmentContext from '../../context/ShipmentContext';
import ShipmentRow from '../ShipmentRow/ShipmentRow';
const ListOfShipments = () => {
    const [state] = useContext(ShipmentContext)
    return state.listOfShipments.map((shipmentData) => <ShipmentRow shipmentData={shipmentData} />)

}

export default ListOfShipments;