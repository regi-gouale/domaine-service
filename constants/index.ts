export const categoryOptions = [
  {
    value: "general_knowledge",
    option: "Connaissance Générale",
  },
  {
    value: "arts_and_literature",
    option: "Arts & Litérature",
  },
  {
    value: "film_and_tv",
    option: "Film & TV",
  },
  {
    value: "food_and_drink",
    option: "Nourriture & Boisson",
  },
  {
    value: "society_and_culture",
    option: "Société & Culture",
  },
  {
    value: "geography",
    option: "Géographie",
  },
  {
    value: "history",
    option: "Histoire",
  },
  {
    value: "music",
    option: "Musique",
  },
  {
    value: "sport_and_leisure",
    option: "Sport & Loisir",
  },
  {
    value: "science",
    option: "Science",
  },
];

export const difficultyOptions = [
  {
    value: "easy",
    option: "Facile",
  },
  {
    value: "medium",
    option: "Moyen",
  },
  {
    value: "hard",
    option: "Difficile",
  },
];

export const alphabeticNumeral = (index: number) => {
  const asciiCode = index + 65;
  const letter = String.fromCharCode(asciiCode);
  return letter + ". ";
};

export const showCategory = (category: string) => {
  if (category === "general_knowledge") return "Connaissance Générale";
  else if (category === "science") return "Science";
  else if (category === "sport_and_leisure") return "Sport & Loisir";
  else if (category === "music") return "Musique";
  else if (category === "history") return "Histoire";
  else if (category === "geography") return "Géographie";
  else if (category === "society_and_culture") return "Société & Culture";
  else if (category === "arts_and_literature") return "Arts & Litérature";
  else if (category === "film_and_tv") return "Film & TV";
  else if (category === "food_and_drink") return "Nourriture & Boisson";
};
