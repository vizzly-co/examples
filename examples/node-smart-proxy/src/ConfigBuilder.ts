/**
 * This module fakes the dynamic logic to build the data sets depending on the ID of a user.
 * In this example, we just map the user ID to a fixed list of data sets, but in your application
 * you can build these more dynamically depending on custom schemas of tables or JSONB fields in
 * your database for each user.
 */

const USER_ID_TO_DATA_SET: { [userId: string]: Object } = {
  "1": [
    {
      id: "das_dynamic",
      name: "A dynamic data set for user 1!",
      fields: [
        {
          id: "fie_1",
          dataType: "TEXT",
          table: "shop_customers",
          name: "country",
          publicName: "Home Country",
        },
        {
          id: "fie_2 - SQL field example",
          dataType: "TEXT",
          sql: "(ProductDetails->>'brand')",
          publicName: "Product brand",
        },
      ],
      joins: [],
    },
  ],
  "2": [
    {
      id: "das_dynamic",
      name: "A dynamic data set for user 2!",
      fields: [
        {
          id: "fie_1",
          dataType: "TEXT",
          table: "shop_customers",
          name: "country",
          publicName: "Home Country",
        },
        {
          id: "fie_2",
          dataType: "BIGINT",
          table: "shop_customers",
          name: "price",
          publicName: "Price in $",
        },
        {
          id: "fie_3 - SQL field example",
          dataType: "TEXT",
          sql: "(ProductDetails->>'brand')",
          publicName: "Product brand",
        },
      ],
    },
  ],
  default: [
    {
      id: "das_dynamic",
      name: "A default data set!",
      fields: [
        {
          id: "fie_99",
          dataType: "TEXT",
          table: "shop_customers",
          name: "country",
          publicName: "Home Country",
        },
      ],
      joins: [],
    },
  ],
};

export const buildConfigForUser = (userId: string) => {
  return {
    connection: {
      client: "postgres",
    },
    dataSets: USER_ID_TO_DATA_SET[userId] || USER_ID_TO_DATA_SET["default"],
  };
};
