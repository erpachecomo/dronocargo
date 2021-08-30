import React, { useContext, useState } from 'react'
import ShipmentContext from '../../../context/ShipmentContext';
import './NewShipmentModal.scss'

const NewShipmentModal = ({ modalHandler }) => {
    const closeModal = () => modalHandler(false);
    const [orderID, setOrderID] = useState('')
    const [technician, setTechnician] = useState('')
    const [platform, setPlatform] = useState('')
    const [drone, setDrone] = useState('')
    const [_, dispatch] = useContext(ShipmentContext);

    const orderIDHandler = (e) =>
        setOrderID(e.target.value);
    const technicianHandler = (e) =>
        setTechnician(e.target.value);
    const platformHandler = (e) =>
        setPlatform(e.target.value);
    const droneHandler = (e) =>
        setDrone(e.target.value);

    const createNewDeliveryHandler = () => {
        dispatch({
            type: 'addShipment', payload: {
                orderID,
                technician,
                platform,
                drone,
                status: 'Ready',
                technicalCheck: 'Passed',
            }
        })
        closeModal();
    };
    return <>
        <div className="modal-back" />
        <div className="new-shipment-modal">
            <span className="new-shipment-modal__title">New delivery</span>
            <span className="new-shipment-modal__description">Please select the order ID and a technician to deploy the cargo. All elements are mandatory.</span>
            <label htmlFor="orderID">Order ID</label>
            <input value={orderID} onChange={orderIDHandler} name="orderID"></input>

            <label htmlFor="technician">Technician</label>
            <input value={technician} onChange={technicianHandler} name="technician"></input>

            <label htmlFor="platform">Platform</label>
            <input value={platform} onChange={platformHandler} name="platform"></input>

            <label htmlFor="drone">Drone</label>
            <input value={drone} onChange={droneHandler} name="drone"></input>

            <div className="new-shipment-modal__buttons">
                <button onClick={closeModal}>Cancel</button>
                <button className="green" onClick={createNewDeliveryHandler}>Create new delivery</button>
            </div>
        </div>
    </>
}

export default NewShipmentModal;