# Login App with React, Redux and Router

# *Content*
* ## 0. Install Dependencies
* ## 1. Components:
    * ### 1.1 App
    * ### 1.2 Registration
    * ### 1.3 Login
    * ### 1.4 Home

* ## 2. Actions:
    * ### 2.1 LOGIN_ACTION
    * ### 2.2 REGISTER_ACTION
    * ### 2.3 LOGOUT_ACTION

* ## 3. Reducer:
    * ### 3.1 Login
    * ### 3.2 Registration
    * ### 3.3 Logout

* ## 4. index.js
* ## 5. Redux parts in Components:
    * ### 5.1 Registration
    * ### 5.2 Login
    * ### 5.3 Home



# 0. Install Dependencies
* Install the following dependencies/libraries for the project `using npm install --save`:
    - `react-router-dom`
    - `react-redux`
    - `redux` 
# 1. Components
## 1.1 App
* The component App is the main component of our application. this will be the core for the `'react-router-dom'` logic. The idea is to have a main header with the links to the paths for registration or login form. For this we use the following components from `'react-rouder-dom'`:
    - BrowserRouter
    - NavLink
    - Route
    - Switch 