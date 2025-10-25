# Metric/Imperial Unit Converter 📏

A simple web application to convert between common metric and imperial units for length, volume, and mass.


## Features ✨

* **Length Conversion:** Meters to Feet and Feet to Meters.
* **Volume Conversion:** Liters to Gallons and Gallons to Liters.
* **Mass Conversion:** Kilograms (Kilos) to Pounds and Pounds to Kilograms (Kilos).
* Uses a clean, mobile-friendly design.
* Results are displayed with three decimal places for precision.

<img width="1272" height="767" alt="image" src="https://github.com/user-attachments/assets/10fde445-9948-4da5-961a-adaa853501e1" />

## Project Structure 📁

| File/Folder | Description |
| :--- | :--- |
| `index.html` | The main HTML structure of the application. |
| `index.css` | Styles for the user interface. |
| **`index.js`** | **The core logic for unit conversion and DOM manipulation.** |
| `vite.config.js` | Configuration file for the Vite build tool. |
| `package.json` | Project dependencies and scripts. |

## Conversion Formulas Used 🔢

The following constants are used in `index.js` for conversions:

* $1 \text{ meter} = 3.281 \text{ feet}$
* $1 \text{ liter} = 0.264 \text{ gallon}$
* $1 \text{ kilogram} = 2.204 \text{ pounds}$
