import React from "react"
import { FaAirFreshener, FaTimes, FaCircle, FaQuestion } from "react-icons/fa"

const Icon = ({name}) => {
    switch (name) {
        case 'Circle':
            return <FaCircle className="icons iconClicked"></FaCircle>
        case 'Cross':
            return<FaTimes className="icons iconClicked"></FaTimes>
        default:
            return <FaQuestion className="icons iconClicked"></FaQuestion>
    }

    
}
export default Icon