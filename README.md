# Metric/Imperial Unit Converter 📏

A simple web application to convert between common metric and imperial units for length, volume, and mass.


## Features ✨

* **Length Conversion:** Meters to Feet and Feet to Meters.
* **Volume Conversion:** Liters to Gallons and Gallons to Liters.
* **Mass Conversion:** Kilograms (Kilos) to Pounds and Pounds to Kilograms (Kilos).
* Uses a clean, mobile-friendly design.
* Results are displayed with three decimal places for precision.

<img width="1203" height="1051" alt="Untitled" src="https://github.com/user-attachments/assets/72fb8360-d893-43ab-9501-3b2a4026b260" />


## Getting Started 🚀

### Prerequisites

To run this project locally, you will need **Node.js** and **npm** (Node Package Manager) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [Your Repository URL]
    cd [Your Project Folder Name]
    ```

2.  **Install dependencies:**
    This project uses **Vite** as a development server and build tool.
    ```bash
    npm install
    ```

3.  **Run the project:**
    This command starts the development server, usually at `http://localhost:5173`.
    ```bash
    npm start
    ```
    or
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    This command compiles the project into the `dist` folder.
    ```bash
    npm run build
    ```

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
