import COLORS from '../styles/base/_variables.scss';


export default function menuColor(menuColorFocus) {
  var color1, color2, bcolor;
  switch(menuColorFocus) {
    case "0":
      color1 = COLORS.scific1;
      color2 = COLORS.scific1g;
      break;
    case "1":
      color1 = COLORS.scific2;
      color2 = COLORS.scific1g;
      break;
    case "2":
      color1 = COLORS.scific3;
      color2 = COLORS.scific3g;
      break;
    case "3":
      color1 = COLORS.scific4;
      color2 = COLORS.scific4g;
      break;
    case "4":
      color1 = COLORS.scific5;
      color2 = COLORS.scific5g;
      break;
    default:
      color1 = COLORS.scific1;
      color2 = COLORS.scific1g;
      bcolor = COLORS.dark;
      break;
  }
  return {color1, color2, bcolor};
}
