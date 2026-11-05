export const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const randomItem = (items) => items[Math.floor(Math.random() * items.length)];

export const randomHex = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase();

export const countries = [
  "India", "Japan", "Brazil", "Canada", "Australia", "France", "Kenya",
  "Italy", "Mexico", "New Zealand", "Norway", "South Korea", "Egypt",
  "Argentina", "Indonesia", "Spain", "Germany", "Thailand", "Iceland", "Ghana"
];

export const elements = [
  ["Hydrogen", "H", 1], ["Helium", "He", 2], ["Lithium", "Li", 3],
  ["Carbon", "C", 6], ["Nitrogen", "N", 7], ["Oxygen", "O", 8],
  ["Neon", "Ne", 10], ["Sodium", "Na", 11], ["Magnesium", "Mg", 12],
  ["Aluminium", "Al", 13], ["Silicon", "Si", 14], ["Phosphorus", "P", 15],
  ["Sulfur", "S", 16], ["Chlorine", "Cl", 17], ["Argon", "Ar", 18],
  ["Potassium", "K", 19], ["Calcium", "Ca", 20], ["Iron", "Fe", 26],
  ["Copper", "Cu", 29], ["Silver", "Ag", 47], ["Gold", "Au", 79],
  ["Mercury", "Hg", 80], ["Lead", "Pb", 82], ["Uranium", "U", 92]
];
