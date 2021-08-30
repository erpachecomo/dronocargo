import React from 'react'
import { useParams } from 'react-router'

const Shipment = () => {
    const { id } = useParams();
    return <h1>Order ID: {id}</h1>
}

export default Shipment