import React from "react";
import DropDown from "../../components/DropDown/DropDown";
import InfoCard from "../../components/InfoCard/InfoCard";

const HomeView = ({ filterData, selectedFilter, setSelectedFilter, data }) => {
  return (
    <div className="container">
      {data.length === 0 ? (
        <div
          className="spinner-grow"
          role="status"
          style={{ marginTop: "40%", marginLeft: "50%" }}
        ></div>
      ) : (
        <>
          <DropDown
            data={filterData}
            selected={selectedFilter}
            setSelected={setSelectedFilter}
            label={"Sort by:"}
            defaultLabel="Select Filter"
          />
          {data.map((tarrif, key) => (
            <InfoCard tarrif={tarrif} index={key} />
          ))}
        </>
      )}
    </div>
  );
};

export default HomeView;
