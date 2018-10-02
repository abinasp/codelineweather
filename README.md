# CodelineWeather

This app indicates weather of certain cities.

# Requirment Specification

1. `npm`
2. `Angular 6`
3. `XAMPP` for running server.

# Installation

1. `npm` and `angular 6` should be installed in the system.
2. Clone this repository by using command `git clone https://github.com/abinasp/codelineweather.git`.
3. Run `npm install`. It will install all the dependencies which is present in `package.json` file.
4. I have used the the `weather.php` file as a datasource in imy XAMPP server.
5. Create a new folder in xampp\htdocs. I had named it codeline. you can check in `Constants.ts` file. If you wish to change the name of the folder then do change the API url in `Constants.ts`.
6. Create an `index.php` file in the respective folder and place all the code of `weather.php` in it.
7. In that folder also create a `.htaccess` file.
8. Open the `.htaccess` file in any code editor and place `Header set Access-Control-Allow-Origin "*"` in it.
9. Run Apache in XAMPP.
10. After all setup then run `ng serve`.

# Result

1. It will show the weather details and city details of 6 cities (Istanbul, Berlin, London, Helsinki, Dublin, Vancouver).
2. By clicking on it, it will go to the deatils weather of that city. Where you can see the Maximum and minimum tempreture of that city and. I have listed the sources also.
3. In the home page there is a search bar, whatever you search it will show the result according to the search value.

# Need to fix

1. Route restriction.
2. Use of Metaweather icon.
