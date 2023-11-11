import Bug from "./assets/Bug.svg";
import Dark from "./assets/Dark.svg";
import Dragon from "./assets/Dragon.svg";
import Eletric from "./assets/Eletric.svg";
import Fairy from "./assets/Fairy.svg";
import Fighting from "./assets/Fighting.svg";
import Flying from "./assets/Flying.svg";
import Fire from "./assets/Fire.svg";
import Ghost from "./assets/Ghost.svg";
import Grass from "./assets/Grass.svg";
import Ground from "./assets/Ground.svg";
import Ice from "./assets/Ice.svg";
import Normal from "./assets/Normal.svg";
import Poison from "./assets/Poison.svg";
import Psychic from "./assets/Psychic.svg";
import Rock from "./assets/Rock.svg";
import Steel from "./assets/Steel.svg";
import Water from "./assets/Water.svg";

export const typesImage = [
  Bug,
  Dark,
  Dragon,
  Eletric,
  Fairy,
  Fighting,
  Flying,
  Fire,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
];

export const defineImageType = (type) => {
  switch (type) {
    case "grass":
      return typesImage[9];

    case "poison":
      return typesImage[13];

    case "fire":
      return typesImage[7];

    case "flying":
      return typesImage[6];

    case "water":
      return typesImage[17];

    case "bug":
      return typesImage[0];

    case "normal":
      return typesImage[12];

    case "dark":
      return typesImage[1];

    case "dragon":
      return typesImage[2];

    case "electric":
      return typesImage[3];

    case "fairy":
      return typesImage[4];

    case "fighting":
      return typesImage[5];

    case "ghost":
      return typesImage[8];

    case "ground":
      return typesImage[10];

    case "ice":
      return typesImage[11];

    case "psychic":
      return typesImage[14];

    case "rock":
      return typesImage[15];

    case "steel":
      return typesImage[16];

    default:
      return typesImage[0];
  }
};
