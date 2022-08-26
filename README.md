## Author: 
#### Aditya Gupta

## Project Name: 
#### Browse Marvel Characters

The project was bootstrapped with CRA so that tooling can be enabled if asked later during hiring process. 

## Getting started

### Pre-requisites
Node should be installed on the system. Minimum expected version is Node 16.14.2

### Instructions
1. Install the application dependencies by running `npm i` on the terminal from project directory. 
2. Once the dependencies are installed, run `npm start`. This should run the application and open the browser with the local web link.
3. In case of any difficulties running/building the application please feel free to reach out the author at aditya@aapastech.com

## Thought process
Below I share rationale behind some decisions.:-
    1. CRA: Was easiest to bootstrap the react app. No changes have been made to default additions of CRA, irrespective of used or not. For example test files are still there, because that is not part of evaluation.
    2. Used SCSS instead CSS so that Styling can be improvised and scoped. It can also be organized using Models like BEM.
    3. Used react-router-dom so that routing can be established. Without that some corner cases (like what happens when user reloads the page while being in details view will need exception handling.)
    4. Test description mentions list the characters (for example like a table). I have not used table so that the implementation can be evaluated from custom list perspective as well. Using some table/grid library would have hidden implementation details that evaluator might want to assess. Because of this sort will be seen as a single-select dropdown (for simplicity), thus one sort at a time even though the API supports sort by multiple fields. This could otherwise be facilitated by using priority order setting input component.
    5. Typescript has not been used since the application is quite small and thats also not in scope of assessment apparently.
    6. Absolute imports have been enabled to simplify and organize imports
    7. The count of characters can be configured.
    8. No UI framework has been used and thus the elements appear native as displayed by individual's browser
    9. Due to shortage of time, the Filter component has been limited to include only two filters by name. It can be extended to incorporate filtering by other supported parameters.
