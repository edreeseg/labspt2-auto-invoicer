import { Post } from '../index';

export const FetchCustomers = async returnedData => {
  const Customers = {
    query: `
      query {
        customers {
          ${returnedData}
        }
      }
    `
  };
  const listOfCustomers = await Post(Customers);
  return listOfCustomers.data.data;
};

export const FetchCustomer = async (customerId, returnedData) => {
  const Customer = {
    query: `
      query {
        customer(customerId: "${customerId}") {
          ${returnedData}
        }
      }
    `
  };
  const returnedCustomer = await Post(Customer);
  return returnedCustomer.data.data;
};
