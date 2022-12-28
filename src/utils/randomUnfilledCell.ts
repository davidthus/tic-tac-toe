import { CellValue } from "../features/boardSlice";

export default function randomUnfilledCell(gameState: CellValue[]) {
  if (!gameState.some((cell) => cell === null)) return 0;
  else {
    let unfilledCells: Number[] = [];
    gameState.forEach((cell, index) => {
      if (cell === null) {
        unfilledCells.push(index);
      }
    });
    return unfilledCells[Math.floor(Math.random() * unfilledCells.length)];
  }
}
