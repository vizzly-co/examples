export const ALLOWED_OPERATORS = ['=', '!=', '>', '<', '>=', '<=', 'is_one_of', 'is_not_one_of'];

export const DATASETS = [
  {
    id: "data_set_1",
    name: "My first data set",
    fields: [
      {
        dataType: "number" as const,
        publicName: "Player age",
        id: "fie_1",
        canBeDimension: false,
        canBeMeasure: true,
        allowedOperators: ALLOWED_OPERATORS
      },
      {
        dataType: "string" as const,
        publicName: "Game",
        id: "fie_2",
        canBeDimension: true,
        canBeMeasure: false,
        allowedOperators: ALLOWED_OPERATORS
      },
      {
        dataType: "number" as const,
        publicName: "Score",
        id: "fie_3",
        canBeDimension: false,
        canBeMeasure: true,
        allowedOperators: ALLOWED_OPERATORS
      },
      {
        dataType: "date_time" as const,
        publicName: "Recorded at",
        id: "fie_4",
        canBeDimension: false,
        canBeMeasure: true,
        allowedGranularities: ["month", "year"],
        allowedOperators: ALLOWED_OPERATORS
      },
    ],
  },
];