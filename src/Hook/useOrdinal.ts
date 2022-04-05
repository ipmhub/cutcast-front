export function useOrdinal(opt: number) {
  switch (opt) {
    case 1:
      return "Primeiro";
    case 2:
      return "Segundo";
    case 3:
      return "Terceiro";
    case 4:
      return "Quarto";
    case 5:
      return "Quinto";
    case 6:
      return "Sexto";
    case 7:
      return "Sétimo";
    case 8:
      return "Oitávo";
    case 9:
      return "Nono";
    case 10:
      return "Sétimo";
    default:
      return "";
  }
}
