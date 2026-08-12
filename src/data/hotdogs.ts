export interface Product {
  id: number;
  name: string;
  length_inches: number;
}

export interface Brand {
  id: number;
  name: string;
  products: Product[];
}

export const hotdogs: Brand[] = [
  {
    id: 1,
    name: "Nathan's Famous",
    products: [
      {
        id: 101,
        name: "Skinless Bun Length",
        length_inches: 5.5,
      },
      {
        id: 102,
        name: "Colossal",
        length_inches: 7.0,
      },
      {
        id: 103,
        name: "Coney Island",
        length_inches: 7.5,
      },
      {
        id: 104,
        name: "Uncured Beef",
        length_inches: 5.5,
      },
      {
        id: 105,
        name: "Angus Beef",
        length_inches: 6.0,
      },
      {
        id: 106,
        name: "Jumbo",
        length_inches: 6.0,
      },
    ],
  },
  {
    id: 2,
    name: "Hebrew National",
    products: [
      {
        id: 201,
        name: "Beef Franks",
        length_inches: 5.5,
      },
      {
        id: 202,
        name: "Bun Length Beef Franks",
        length_inches: 6.25,
      },
      {
        id: 203,
        name: "Jumbo",
        length_inches: 5.5,
      },
      {
        id: 204,
        name: "All Natural Uncured",
        length_inches: 5.5,
      },
    ],
  },
  {
    id: 3,
    name: "Oscar Mayer",
    products: [
      {
        id: 301,
        name: "Classic Beef Franks",
        length_inches: 5.6,
      },
      {
        id: 302,
        name: "Bun Length",
        length_inches: 6.0,
      },
    ],
  },
  {
    id: 4,
    name: "Ball Park Brand",
    products: [
      {
        id: 401,
        name: "Beef",
        length_inches: 5.0,
      },
      {
        id: 402,
        name: "Bun Size Beef",
        length_inches: 5.5,
      },
      {
        id: 403,
        name: "Angus",
        length_inches: 5.0,
      },
      {
        id: 404,
        name: "Angus Bun Size",
        length_inches: 6.0,
      },
      {
        id: 405,
        name: "Franks",
        length_inches: 5.0,
      },
    ],
  },
  {
    id: 5,
    name: "Sahlen's",
    products: [
      {
        id: 501,
        name: "Smokehouse Pork/Beef",
        length_inches: 7.0,
      }
    ],
  },
  {
    id: 6,
    name: "Applegate",
    products: [
      {
        id: 601,
        name: "Natural Uncured Beef",
        length_inches: 5.0,
      },
      {
        id: 602,
        name: "The Great Organic Beef",
        length_inches: 5.0,
      },
    ],
  },
  {
    id: 7,
    name: "Carolina",
    products: [
      {
        id: 701,
        name: "Bright Leaf",
        length_inches: 5.0,
      },
    ],
  },
  {
    id: 8,
    name: "Costco",
    products: [
      {
        id: 801,
        name: "Food Court",
        length_inches: 8,
      },
    ],
  },
  {
    id: 9,
    name: "Sam's Club",
    products: [
      {
        id: 901,
        name: "Food Court",
        length_inches: 7,
      },
    ],
  },

];
