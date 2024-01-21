<!-- @format -->

<!-- tailwind create -->

### tailwind create

npm install -D tailwindcss
npx tailwindcss init

# tailwind.config.js modify

module.exports = {
content: ["./src/**/*.{html,js}"],//add
theme: {
extend: {},
},
plugins: [],
}

# src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;

<!-- typescript add -->

npm install --save-dev typescript
npx tsc --init


<!-- install styled-component -->
npm install styled-components
yarn add styled-components
