import {
  ICashFlowService,
  ICashFlowServiceReturn,
} from "../interfaces/ICashFlowService";

class CashFlowService {
  calculateChange({
    price,
    amountReceived,
  }: ICashFlowService): ICashFlowServiceReturn {
    let change = amountReceived - price;

    const hundredNotes = Math.trunc(change / 100);
    change %= 100;

    const notesOutOfTen = Math.trunc(change / 10);
    change %= 10;

    const notesOutOfOne = change;
    change += notesOutOfTen * 10 + hundredNotes * 100;

    return {
      price,
      amountReceived,
      change,
      hundredNotes,
      notesOutOfTen,
      notesOutOfOne,
    };
  }
}

export { CashFlowService };
