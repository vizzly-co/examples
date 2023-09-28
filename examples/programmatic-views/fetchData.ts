export const fetchData = async (dataSet) => {
  if (dataSet.id == "data_set_1") {
    return [
      {
        fie_1: 16,
        fie_2: "Space invaders",
        fie_3: 54,
        fie_4: "2023-01-30T08:21:25.459Z",
      },
      {
        fie_1: 12,
        fie_2: "Space invaders",
        fie_3: 54,
        fie_4: "2023-02-13T08:21:25.459Z",
      },
      {
        fie_1: 9,
        fie_2: "Space invaders",
        fie_3: 4,
        fie_4: "2023-03-13T08:21:25.459Z",
      },
      {
        fie_1: 19,
        fie_2: "Space invaders",
        fie_3: 140,
        fie_4: "2023-04-07T08:21:25.459Z",
      },
      {
        fie_1: 90,
        fie_2: "Tetris",
        fie_3: 7,
        fie_4: "2023-03-13T08:21:25.459Z",
      },
      {
        fie_1: 73,
        fie_2: "Tetris",
        fie_3: 68,
        fie_4: "2023-04-07T08:21:25.459Z",
      },
    ];
  } else {
    throw "Unknown data set.";
  }
}