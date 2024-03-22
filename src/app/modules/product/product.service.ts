import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TProduct } from './product.interfaces';

import Product from './product.model';

// Create a new Service into Mongodb Database
const createProductIntoDB = async (payload: TProduct) => {
  const isDeleted = false;

  const newPayload = {
    ...payload,
    isDeleted,
  };

  const result = await Product.create(newPayload);
  return result;
};

// Get all Services from the database
const getAllProductFromDB = async () => {
  const result = await Product.find();
  if (!result.length) {
    throw new AppError(httpStatus.NOT_FOUND, 'Not Found', `No Data Found`, {
      notfound: `There are no data available`,
    });
  }
  return result;
};

// get single Service from the database by id
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Not Found', `No Data Found`, {
      notfound: `There are no data available`,
    });
  }

  return result;
};

// update single Service using id

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const findingData = await Product.findById(id);
  if (!findingData) {
    throw new AppError(httpStatus.NOT_FOUND, 'Not Found', `No Data Found`, {
      notfound: `There are no data available`,
    });
  }

  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
