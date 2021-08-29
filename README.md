# Game of life project

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
o An empty Cell with exactly 3 live neighbours &quot;comes to life&quot;.
o A Cell who &quot;comes to life&quot; outside the board should wrap at the other side of the
board.

 Once the next generation is done, User can trigger &quot;next generation&quot; again.


![image](https://user-images.githubusercontent.com/11869506/131240892-864b518d-2a2e-47dd-8f4d-6a717f26c9f4.png)



**Step2:** Click the **Next generation** button again to move to the next run the condition on the current grid(selected cells)

![image](https://user-images.githubusercontent.com/11869506/131240905-ad35cc1c-6426-4b18-8658-fc5a05ab5ec7.png)
![image](https://user-images.githubusercontent.com/11869506/131240914-14fc703c-bdef-4e30-9e87-c8c0d33fa950.png)



**Step3:** click on **Reset** button to reset the grid(the cells selected)

![image](https://user-images.githubusercontent.com/11869506/131240853-836d4fa1-5954-4316-995b-606fa69b0f8f.png)


### `npm test`

Launches the test runner in the interactive watch mode.\


