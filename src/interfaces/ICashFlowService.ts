export interface ICashFlowService {
  price: number;
  amountReceived: number;
}

export interface ICashFlowServiceReturn {
  price: number;
  amountReceived: number;
  change: number;
  hundredNotes: number;
  notesOutOfTen: number;
  notesOutOfOne: number;
}
