import {FC, useState} from "react";
import styles from "./GameOfLife.module.css";

const generateInitialCells = (): number[][] => {
  // generate a the initial state with no cells selected
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(Array.from(Array(10), () => 0));
  }
  return rows;
};

export const GameOfLife: FC = () => {
  const [cell, setCell] = useState(() => {
    return generateInitialCells(); // On first render none of the cells are selected
  });

  return (
    <div>
      <h1 className={styles.heading}>Game of Life</h1>
      <div className={styles.gridStructure}>
        {cell.map((rows, a) =>
          rows.map((col, b) => (
            <div
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
        <button onClick={() => alert("Calculate next generation")}>Next generation</button>
        <button onClick={() => setCell(() => generateInitialCells())}>Reset</button>
      </div>
    </div>
  );
};
