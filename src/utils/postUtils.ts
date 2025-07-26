export const getPostColorFromCategory = (category: string) => {
  switch (category) {
    case "Sustainability":
      return "lime";
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";
    default:
      return "fuchsia";
  }
};
export const getPostColorFromPositionType = (category: string) => {
  switch (category) {
    case "Full-time":
      return "lime";
    case "Part-time":
      return "cyan";
    case "Contract":
      return "violet";
    default:
      return "fuchsia";
  }
};

export const getPostColorFromPositionCategory = (category: string) => {
  switch (category) {
    case "Engineering":
      return "lime";
    case "Product":
      return "cyan";
    case "Marketing":
      return "violet";
    default:
      return "fuchsia";
  }
};
