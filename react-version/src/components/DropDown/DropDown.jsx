import React from "react";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropDown = ({
  setSelected,
  label,
  selected,
  data = [],
  defaultLabel,
}) => {
  return (
    <div style={{ marginTop: 10 }}>
      <label>
        <FontAwesomeIcon icon={faArrowDown} />
        <FontAwesomeIcon icon={faArrowUp} />
        {label}
      </label>
      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <option disabled selected value="">
          {defaultLabel}
        </option>
        {data.map((_d, index) => (
          <option value={_d.value}>{_d.label}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
