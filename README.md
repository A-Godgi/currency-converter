# Test Task React Currency Converter

A simple React project for converting currencies.
The project was done as a test task for a vacancy.

## Technologies

- React
- TypeScript
- HTML
- SCSS

## Installation

1. Clone the repository: `git clone https://github.com/A-Godgi/currency-converter.git`
2. Navigate to the project directory: `cd currency-converter`
3. Install dependencies: `npm install`

## Usage

Run the following command to start the project:

```bash
npm start
```

Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Project Structure

The project follows a standard React application structure:

```
├── public/                             <- Contains static assets like HTML files, images, and the favicon.
├── src/                                <- Contains the source code for the React application.
│   ├── assets/                         <- Contains assets like images and styles.
│   │   └── styles/                     <- Contains SCSS files for styling the application.
│   │       ├── _base.scss              <- Base styles for the application.
│   │       ├── _header.scss            <- Styles for the layout header.
│   │       ├── _layout.scss            <- Styles for the main layout.
│   │       ├── _pallette.scss          <- Color palette for the application.
│   │       ├── _ui.scss                <- Styles for UI elements.
│   │       └── main.scss               <- Main SCSS file that imports all other styles.
│   ├── components/                     <- Contains React components for the currency converter.
│   │   ├── ConverterElement.tsx        <- One currency converter element.
│   │   ├── EditPanel.tsx               <- Component for editing selected currencies.
│   │   └── ExchangeRate.tsx            <- Component for displaying exchange rates.
│   ├── constants/                      <- Contains project-specific constants.
│   │   └── index.ts                    <- Main file exporting constants.
│   ├── hooks/                          <- Contains custom React hooks.
│   │   ├── useFetch.ts                 <- Custom hook for handle fetch data.
│   │   ├── useHandleRequest.ts         <- Custom hook for handling request logic.
│   │   └── useHandleConvert.ts         <- Custom hook for handling conversion logic.
│   ├── pages/                          <- Contains React components for the pages of the application.
│   │   └── Converter.tsx               <- Main page of the application.
│   ├── services/                       <- Contains services for fetching data.
│   │   ├── api.ts                      <- Service for fetching data from the API.
│   │   ├── getCurrenciesList.ts        <- Service for handle currencies list.
│   │   └── getSelectedCurrenciesFromStorage.ts <- Service for getting selected currencies from the localstorage.
│   ├── types/                          <- Contains TypeScript types and interfaces.
│   │   └── index.ts                    <- Main file exporting types and interfaces.
│   ├── ui/                             <- Contains reusable UI components.
│   │   ├── Card.tsx                    <- Card component.
│   │   ├── ConverterSelect.tsx         <- Select component for the currency converter.
│   │   ├── EditableCard.tsx            <- Editable card component.
│   │   ├── Layout.tsx                  <- Layout component.
│   │   └── SelectFromAll.tsx           <- Select component for selecting from all currencies.
│   ├── App.tsx                         <- Main React component that integrates other components to create the app.
│   └── index.tsx                       <- Entry point for the React app.
├── .gitignore                          <- Specifies files and directories that should be ignored by version control.
├── package.json                        <- Configuration file that includes project dependencies and scripts.
├── package-lock.json                   <- Auto-generated file describing the exact tree that was generated for the node_modules folder.
├── README.md                           <- Documentation file providing information about the project.
├── tsconfig.json                       <- TypeScript configuration file.
├── .prettierrc                         <- Prettier configuration file.
├── eslint.config.mjs                   <- ESLint configuration file.
└── webpack.config.js                   <- Webpack configuration file.
```

## Notes

The BigNumber.js library is used. This is justified by the need to work with large numbers and high precision calculations, which is especially important in financial applications, such as a currency converter. In JavaScript, the built-in number types (Number) have limitations in terms of precision and range, which can lead to errors when working with very large or very small numbers.
