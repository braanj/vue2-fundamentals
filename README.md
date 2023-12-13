# Vue.js Project README

## Project Overview

This Vue.js project is a web application built for educational purposes. The application is built using Vue.js 2, Vue Router, and Vuex for state management.

## Project Structure

The project structure follows common Vue.js conventions:

- **`public/`**: Contains static assets and environment-specific configuration files.

- **`src/`**: Houses the source code of the application.

  - **`assets/`**: Static assets like images and fonts.

  - **`components/`**: Reusable Vue components.

  - **`views/`**: Components representing entire views or pages.

  - **`router/`**: Vue Router configuration.

  - **`store/`**: Vuex store modules for state management.

  - **`dataLayer/`**: Services for making API requests or handling business logic.

  - **`styles/`**: Global or shared styles.

  - **`App.vue`**: The root Vue component.

  - **`main.js`**: The main entry point of the application.

## How to Run the Project

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/braanj/vue2-fundamentals.git
   ```

2. **Install Dependencies:**

   ```bash
   cd project-directory
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run serve
   ```

   The application will be available at `http://localhost:8080`.

## Features

- **Home Page:** Displays general information about the project and a list of posts.

- **Post Details Page:** Allows users to click on a post to view detailed information about that specific post.

## Dependencies

- **Vue.js 2:** The core Vue.js framework for building user interfaces.

- **Vue Router:** Provides navigation and routing capabilities for the application.

- **Vuex:** State management library for managing the application's state.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and commit them.
4. Push your changes to your fork.
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use, modify, and distribute the code. Contributions are welcome!