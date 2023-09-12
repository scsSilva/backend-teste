interface IPalindromicNumbersService {
  start: number;
  end: number;
}

class PalindromicNumbersService {
  listNumbersInRange({ start, end }: IPalindromicNumbersService) {
    const numbers = new Array<Number>;

    for (let index = start; index <= end; index++) {
      let number = index;
      let palindromic = '';

      while (number != 0) {
        palindromic = palindromic.concat((number % 10).toString());
        number = Math.trunc(number / 10);
      }

      if (parseInt(palindromic) === index) {
        numbers.push(index);
      }
    }

    return numbers;
  }
}