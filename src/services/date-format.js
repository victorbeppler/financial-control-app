export class DateFormatService {
  async format(monthNumber) {
    const monthNames = {
      1: "Janeiro",
      2: "Fevereiro",
      3: "Março",
      4: "Abril",
      5: "Maio",
      6: "Junho",
      7: "Julho",
      8: "Agosto",
      9: "Setembro",
      10: "Outubro",
      11: "Novembro",
      12: "Dezembro",
    };

    if (monthNumber in monthNames) {
      return monthNames[monthNumber];
    } else {
      return "Mês inválido";
    }
  }
  async numberMonth(number) {
    const listMonth = {
      0: "01",
      1: "02",
      2: "03",
      3: "04",
      4: "05",
      5: "06",
      6: "07",
      7: "08",
      8: "09",
      9: "10",
      10: "11",
      11: "12",
    };

    if (number in listMonth) {
      return listMonth[number];
    } else {
      return "Mês inválido";
    }
  }
}
