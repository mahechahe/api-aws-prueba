import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertItem = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getItemsService = async () => {
  const responseAllItems = await ItemModel.find({});
  return responseAllItems;
};

const getItemService = async (id: string) => {
  const responseAllItems = await ItemModel.findOne({
    _id: id,
  });
  return responseAllItems;
};

const deleteItemService = async (id: string) => {
  const responseAllItems = await ItemModel.deleteOne({
    _id: id,
  });
  return responseAllItems;
};

const updateItemService = async (id: string, data: Car) => {
  const responseAllItems = await ItemModel.findByIdAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true
    }
  );
  return responseAllItems;
};

export {
  insertItem,
  getItemsService,
  getItemService,
  deleteItemService,
  updateItemService,
};
