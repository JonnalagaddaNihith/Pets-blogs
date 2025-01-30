import { allGuides, allPets } from 'contentlayer/generated';

export const getGuidesByTag = (tag: string) => {
  return allGuides.filter(guide => guide.tags?.includes(tag));
};

export const getPetsByCategory = (category: string) => {
  return allPets.filter(pet => pet.category === category);
}; 