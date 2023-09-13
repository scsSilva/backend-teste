import { ICashFlowService } from "../interfaces/ICashFlowService";
import { CashFlowService } from "../services/CashFlowService";

describe("Cash Flow", () => {
  it("should returns banknotes values correctly", () => {
    const cashFlowService = new CashFlowService();

    let change = cashFlowService.calculateChange({
      price: 500,
      amountReceived: 615,
    });

    expect(change).toEqual({
      price: 500,
      amountReceived: 615,
      change: 115,
      hundredNotes: 1,
      notesOutOfTen: 1,
      notesOutOfOne: 5,
    });

    change = cashFlowService.calculateChange({ price: 10, amountReceived: 22 });

    expect(change).toEqual({
      price: 10,
      amountReceived: 22,
      change: 12,
      hundredNotes: 0,
      notesOutOfTen: 1,
      notesOutOfOne: 2,
    });

    change = cashFlowService.calculateChange({ price: 4, amountReceived: 12 });

    expect(change).toEqual({
      price: 4,
      amountReceived: 12,
      change: 8,
      hundredNotes: 0,
      notesOutOfTen: 0,
      notesOutOfOne: 8,
    });
  });
});
