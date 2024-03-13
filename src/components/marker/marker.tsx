import React from "react";

interface MarkerProps {
    markerText: string;
}

const Marker: React.FC<MarkerProps> = ({markerText}) => {
    return (
        <p className="marker text_s">{markerText}</p>
    )
}

export default Marker;