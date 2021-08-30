import React from "react";
import { useHistory } from "react-router-dom";

import Cell from "./Cell/Cell";

import { ReactComponent as ViewSideBarSVG } from "../../images/viewSidebar.svg";
import { ReactComponent as KeyboardArrowDownSVG } from "../../images/keyboardArrowDown.svg";

import './ShipmentRow.scss';

const ShipmentRow = ({ shipmentData }) => {
    const history = useHistory();

    const detailsOnClickHandler = () =>
        history.push(`/shipment/${shipmentData.orderID}`);

    return <div className="shipment-row">
        <Cell title="Status" value={shipmentData.status} />
        <Cell title="Order ID" value={shipmentData.orderID} />
        <Cell title="Technician" value={shipmentData.technician} />
        <Cell title="Platform" value={shipmentData.platform} />
        <Cell title="Drone" value={shipmentData.drone} />
        <Cell title="Technical Check" value={shipmentData.technicalCheck} />
        <button onClick={detailsOnClickHandler}>
            <span className="text-svg">
                Details
                <ViewSideBarSVG />
            </span>
        </button>
        <button>
            <span className="text-svg">
                Actions
                <KeyboardArrowDownSVG />
            </span>
        </button>

    </div>
}

export default ShipmentRow