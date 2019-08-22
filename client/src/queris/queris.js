import { gql } from "apollo-boost";

const getCarsQuery = gql`
  {
    cars {
      carName
      id
    }
  }
`;


const getOwnerQuery = gql`
  {
    owners {
      firstName
      id
    }
  }
`;


export {
  getCarsQuery,
  getOwnerQuery
};

