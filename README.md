# Cell simulator project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run the application

**Step 1:** In the project directory run **npm i** to install the dependencies

**Step 2:**  run **npm start**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Steps to use the application
**Step1:** Select the cells in the grid and click on **Next generation** button. It will create the next generation based on the below criteria

o A Cell with fewer than two live neighbours dies of under-population.

o A Cell with 2 or 3 live neighbours lives on to the next generation.

o A Cell with more than 3 live neighbours dies of overcrowding.

o An empty Cell with exactly 3 live neighbours comes to life

o A Cell who &quot;comes to life&quot; outside the board should wrap at the other side of the
board.


 Once the next generation is done, User can trigger &quot;next generation&quot; again.


![image](https://user-images.githubusercontent.com/11869506/131241396-db0f952b-bd59-4395-95d9-1380b6263ce2.png)



**Step2:** Click the **Next generation** button again to move to the next run the condition on the current grid(selected cells)

![image](https://user-images.githubusercontent.com/11869506/131241411-e91b68f7-0adf-4037-a724-591ba8464115.png)
![image](https://user-images.githubusercontent.com/11869506/131241418-b8b65066-10fe-43ca-873a-786421794a83.png)



**Step3:** click on **Reset** button to reset the grid(the cells selected)

![image](https://user-images.githubusercontent.com/11869506/131241431-d6ca91ea-f2c6-4f21-8788-1de1d56dc7e3.png)


### `npm test CellSimulator.test`

Launches the test runner in the interactive watch mode.\

![image](https://user-images.githubusercontent.com/11869506/131241472-0e304af8-1fe8-4f0e-bef6-41c0ecbf97ec.png)



