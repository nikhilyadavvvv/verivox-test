const mockData = [
  {
    id: 0,
    name: "Tarrif 1",
    download: 15,
    upload: 7,
    price: "120,45",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
  },
  {
    id: 1,
    name: "Tarrif 2",
    download: 11,
    upload: 6,
    price: "121,45",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
  },
  {
    id: 3,
    name: "Tarrif 3",
    download: 12,
    upload: 8,
    price: "122,45",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
  },
  {
    id: 4,
    name: "Tarrif 4",
    download: 13,
    upload: 2,
    price: "124,45",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
  },
  {
    id: 5,
    name: "Tarrif 5",
    download: 12,
    upload: 100,
    price: "123,45",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3", "Benefit 4"],
  },
];

export const getMockData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000); // Simulate a delay of 1 second
  });
};
