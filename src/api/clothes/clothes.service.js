import * as clothesRepository from './clothes.repository.js'; 
import Clothes from './clothes.model.js'; 

// Add new clothes
export const addClothes = async (clothesData) => {
  // No se transforma la URL ya que ahora usamos URLs directas de Imgur
  return await clothesRepository.create(clothesData); // Delegate to repository
};

// Find clothes by size
export const findClothesBySize = async (size) => {
  return await clothesRepository.findBySize(size); // Use repository for size
};

// Find clothes by piece or return all clothes
export const findClothesByPiece = async (piece) => {
  const query = piece ? { piece } : {};
  return await clothesRepository.find(query); // Fetch based on piece or all
};
