import COLORS from 'styles/base/_variables.scss';


export default function menuColor(menuColorFocus) {
  var color1, color2, bcolor;
  switch(menuColorFocus) {
    case "0":
      color1 = COLORS.colorset0a;
      color2 = COLORS.colorset0b;
      break;
    case "1":
      color1 = COLORS.colorset1a;
      color2 = COLORS.colorset1b;
      break;
    case "2":
      color1 = COLORS.colorset2a;
      color2 = COLORS.colorset2b;
      break;
    case "3":
      color1 = COLORS.colorset3a;
      color2 = COLORS.colorset3b;
      break;
    default:
      color1 = COLORS.colorset0a;
      color2 = COLORS.colorset0b;
      bcolor = COLORS.dark;
      break;
  }
  return {color1, color2, bcolor};
}
