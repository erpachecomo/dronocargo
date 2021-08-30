
import React from "react";
import './Cell.scss';

const Cell = ({ title, value }) => {
    return <div className="cell">
        <span className="cell__title">
            {title}
        </span>
        <span className="cell__value">
            {value}
        </span>
    </div>
}
export default Cell