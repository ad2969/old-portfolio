import * as COLORS from '../constants/colors';

export default function menuColor(menuColorFocus) {
  var color1, color2, bcolor;
  switch(menuColorFocus) {
    case "1":
      color1 = COLORS.SCIFIPALETTE.color1;
      color2 = COLORS.SCIFIPALETTE.color1g;
      break;
    case "2":
      color1 = COLORS.SCIFIPALETTE.color2;
      color2 = COLORS.SCIFIPALETTE.color2g;
      break;
    case "3":
      color1 = COLORS.SCIFIPALETTE.color3;
      color2 = COLORS.SCIFIPALETTE.color3g;
      break;
    case "4":
      color1 = COLORS.SCIFIPALETTE.color4;
      color2 = COLORS.SCIFIPALETTE.color4g;
      break;
    case "5":
      color1 = COLORS.SCIFIPALETTE.color5;
      color2 = COLORS.SCIFIPALETTE.color5g;
      break;
    default:
      color1 = COLORS.OCEANPALETTE.color1;
      color2 = COLORS.OCEANPALETTE.color2;
      bcolor = COLORS.OCEANPALETTE.dark;
      break;
  }
  return {color1, color2, bcolor};
}
