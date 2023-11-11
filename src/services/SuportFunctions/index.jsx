export const defineColorCard = (type) => {
  switch (type) {
    case "grass":
      return "#729F92";

    case "poison":
      return "#6c2e6d";

    case "fire":
      return "#EAAB7D";

    case "flying":
      return "#6892B0";

    case "water":
      return "#71C3FF";

    case "bug":
      return "#76A866";

    case "normal":
      return "#BF9762";

    case "dark":
      return "#5C5365";

    case "dragon":
      return "#004170";

    case "electric":
      return "#bba33b";

    case "fairy":
      return "#EC8FE6";

    case "fighting":
      return "#CE4069";

    case "ghost":
      return "#5269AC";

    case "ground":
      return "#D97745";

    case "ice":
      return "#74CEC0";

    case "psychic":
      return "#F67176";

    case "rock":
      return "#C7B78B";

    case "steel":
      return "#BBBBB";

    default:
      return "#333333";
  }
};
export const defineColorType = (type) => {
  switch (type) {
    case "grass":
      return "#70B873";

    case "poison":
      return "#AD61AE";

    case "fire":
      return "#e30a0a";

    case "flying":
      return "#6892B0";

    case "water":
      return "#2f8cce";

    case "bug":
      return "#316520";

    case "normal":
      return "#8A8A8A";

    case "dark":
      return "#5C5365";

    case "dragon":
      return "#0A6CBF";

    case "electric":
      return "#F4D23B";

    case "fairy":
      return "#EC8FE6";

    case "fighting":
      return "#CE4069";

    case "ghost":
      return "#5269AC";

    case "ground":
      return "#b04916";

    case "ice":
      return "#74CEC0";

    case "psychic":
      return "#F67176";

    case "rock":
      return "#C7B78B";

    case "steel":
      return "#BBBBB";

    default:
      return "#333333";
  }
};
export const convertIdImage = (number) => {
  if (number > 0 && number < 10) {
    return `00${number}`;
  } else if (number >= 10 && number <= 99) {
    return `0${number}`;
  } else {
    return number;
  }
};
export const strongCalc = (number) => {
  if (number > 0 && number <= 20) {
    return "#FC0200";
  } else if (number > 20 && number <= 30) {
    return "#FF5609";
  } else if (number > 30 && number <= 40) {
    return "#FC900A";
  } else if (number > 40 && number <= 60) {
    return "#FCC802";
  } else if (number > 60 && number <= 80) {
    return "#C8FD03";
  } else if (number > 80 && number <= 90) {
    return "#88FF03";
  } else if (number > 90) {
    return "#2BFE03";
  }
};
export const powerFullProgress = (number) => {
  if (number > 99 && number <= 200) {
    return "#FC0200";
  } else if (number > 200 && number <= 300) {
    return "#FF5609";
  } else if (number > 303 && number <= 400) {
    return "#FC900A";
  } else if (number > 400 && number <= 600) {
    return "#FCC802";
  } else if (number > 600 && number <= 800) {
    return "#C8FD03";
  } else if (number > 800 && number <= 900) {
    return "#88FF03";
  } else if (number > 900) {
    return "#2BFE03";
  }
};
