import React, { useState } from 'react'
import NewShipmentModal from './NewShipmentModal/NewShipmentModal'

const SearchSection = () => {
    const [showModal, setShowModal] = useState(false)
    const showModalHandler = () => setShowModal(!showModal)
    return <div className="search-section">
        <span className="search-section__title">Delivery</span>
        <span className="search-section__subtitle">History</span>
        <input placeholder="Search"></input>
        <button className="green" onClick={showModalHandler}>New delivery</button>
        {showModal && <NewShipmentModal modalHandler={setShowModal} />}
    </div>

}

export default SearchSection;