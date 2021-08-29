import {FC, useState, useCallback} from "react";
import styles from "./GameOfLife.module.css";

const generateInitialCells = (): number[][] => {
  // generate a the initial state with no cells selected
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(Array.from(Array(10), () => 0));
  }
  return rows;
};

const movements = [
  [0, 1], // right
  [0, -1], // left
  [1, -1], // top left
  [-1, 1], // top right
  [1, 1], // top
  [-1, -1], // bottom
  [1, 0], // bottom right
  [-1, 0], // bottom left
];

export const GameOfLife: FC = () => {
  const [cell, setCell] = useState(() => {
    return generateInitialCells(); // On first render none of the cells are selected
  });
  const runGame = useCallback(() => {
    let cellCopy = JSON.parse(JSON.stringify(cell));
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let neighbours = 0;

        movements.forEach(([x, y]) => {
          const newX = i + x;
          const newY = j + y;

          if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
            // Identify the neighbours
            neighbours += cell[newX][newY];
          }
        });

        if (neighbours < 2 || neighbours > 3) {
          // If the neighbours is less than 2 or greater than 3 it dies
          cellCopy[i][j] = 0;
        } else if (cell[i][j] === 0 && neighbours === 3) {
          cellCopy[i][j] = 1;
        }
      }
    }

    setCell(cellCopy);
  }, [cell]);
  return (
    <div>
      <h1 className={styles.heading}>Game of life</h1>
      <div className={styles.gridStructure}>
        {cell.map((rows, a) =>
          rows.map((col, b) => (
            <div
              aria-label="cell"
              key={`${a}-${b}`}
              onClick={() => {
                // make the cell on click
                let newCell = JSON.parse(JSON.stringify(cell));
                newCell[a][b] = cell[a][b] ? 0 : 1;
                setCell(newCell);
              }}
              style={{
                width: 30,
                height: 30,
                backgroundColor: cell[a][b] ? "#33E3FF" : undefined,
                border: "1px solid black",
              }}
            ></div>
          ))
        )}
      </div>

      <div className={styles.gameButtons}>
        <button onClick={() => runGame()}>Next generation</button>
        <button onClick={() => setCell(() => generateInitialCells())}>Reset</button>
      </div>
    </div>
  );
};
