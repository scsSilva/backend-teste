import { PalindromicNumbersService } from "../services/PalindromicNumbersService";

describe("Palindromic Numbers", () => {
  it("should return list of palindromic numbers correctly", () => {
    const palindromicNumbersService = new PalindromicNumbersService();

    let listNumbers = palindromicNumbersService.listNumbersInRange({
      start: 1,
      end: 500,
    });

    expect(listNumbers).toEqual({
      numbers: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111,
        121, 131, 141, 151, 161, 171, 181, 191, 202, 212, 222, 232, 242, 252,
        262, 272, 282, 292, 303, 313, 323, 333, 343, 353, 363, 373, 383, 393,
        404, 414, 424, 434, 444, 454, 464, 474, 484, 494,
      ],
    });

    listNumbers = palindromicNumbersService.listNumbersInRange({
      start: 1,
      end: 10,
    });

    expect(listNumbers).toEqual({
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });

    listNumbers = palindromicNumbersService.listNumbersInRange({
      start: 1,
      end: 0,
    });

    expect(listNumbers).toEqual({
      numbers: [],
    });
  });
});
