export const gameBoard = Array.from({ length: 8 }, (_, rowIndex) => {
  const rowStartingColor = rowIndex % 2 === 0 ? "R" : "B";

  return Array.from({ length: 8 }, (_, colIndex) =>
    colIndex % 2 === 0 ? rowStartingColor : rowStartingColor === "R" ? "B" : "R"
  );
});
