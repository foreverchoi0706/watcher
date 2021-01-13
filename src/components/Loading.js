import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

import "../styles/Loading.scss";

export default function Loading() {
  return (
    <div className="Loading">
      <FontAwesomeIcon icon={faTruckLoading} size="2x" spin={true} />
    </div>
  );
}
