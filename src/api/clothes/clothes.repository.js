import Clothes from './clothes.model.js';

export const create = async (clothesData) => {
  const clothes = new Clothes(clothesData);
  return await clothes.save();
};