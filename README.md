Environment Variables-
as react is a frontend library,mostly variables are stored in javascript which can be accessed through our browser also.
some sensitive information that will be stored in database will be stored as system variables which are managed in secret managers of other environments.
these variables are always stored in the root of our project,(package.json,readme are the roots).
we never ship .env file to the github,create a sample file which will be pushed and will be accessed by us.
it is used to store variables which change according to the environments such as API keys,database connection variables,Urls
environments are testing,production,development.
UseForwardRef(imp)-links the components to the main file where they would be used,some reference is passed from the main page to the component which is then used in component to take the reference as ref={ref}
Components-
Header-
consists of logo,signup,login,logout all these are grouped under components(function which accepts children as its parameters)-
logo-embedded from the logo component with width passed in props.
now we use usenavigation and link in the header file.
create a constant nav=usenavigation();
create an array navlist with multiple objects with path/slug,name,active as their keys.
all this is passed into the component component.
active key is decided using useselector for accesing status from the store.its also used in displaying of logout button.
then use map on navlist and provide key as name for the <li>(important) and use a button component inside with onClick property using a call back function calling nav with slug as its parameter,and display the name as usual.
we can also pass props(additional data user passes) in the components.
Footer-hard coded text
make an index.js file to import and export all the components at one place(optional)
difference between link and navlink-
<br>
<b>link just acts as an anchor tag whereas navlink can add styling,active property while acting as an anchor tag.</b>