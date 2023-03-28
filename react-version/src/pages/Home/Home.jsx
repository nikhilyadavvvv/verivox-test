import React, { useEffect, useState } from "react";
import "../../App.sass";
import filterData from "./filterData";
import { getMockData } from "../../utils/mockData";
import HomeView from "./HomeView";
const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await getMockData();
    setData(result);
  };

  useEffect(() => {
    sortTariffs();
  }, [selectedFilter]);

  const sortTariffs = () => {
    let sortedData = [];
    switch (selectedFilter) {
      case "download descending":
        sortedData = [...data].sort((a, b) => b.download - a.download);
        break;
      case "download ascending":
        sortedData = [...data].sort((a, b) => a.download - b.download);
        break;
      case "upload descending":
        sortedData = [...data].sort((a, b) => b.upload - a.upload);
        break;
      case "upload ascending":
        sortedData = [...data].sort((a, b) => a.upload - b.upload);
        break;
      case "price descending":
        sortedData = [...data].sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
        break;
      case "price ascending":
        sortedData = [...data].sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      default:
        sortedData = data;
        break;
    }
    setData(sortedData);
  };

  return (
    <HomeView
      data={data}
      filterData={filterData}
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
    />
  );
};

export default Home;
