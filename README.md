# Random Quote Generator

This project is a simple web application built with Node.js and React that generates random quotes.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/random-quote-generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd random-quote-generator
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Initialization

1. Set up environment variables:

    - Windows:
    
        Create a `.env` file in the root directory and define the following environment variables:

        ```
        REACT_APP_API_URL=your_api_url
        ```

        Replace `your_api_url` with the URL of the API from which you fetch random quotes.

    - macOS/Linux:
    
        Create a `.env` file in the root directory and define the following environment variables:

        ```bash
        echo "REACT_APP_API_URL=your_api_url" > .env
        ```

        Replace `your_api_url` with the URL of the API from which you fetch random quotes.

2. Start the development server:

    ```bash
    npm start
    ```

3. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

- Click the "Generate Quote" button to fetch and display a random quote.

- Share the generated quote on social media platforms by clicking the respective icons.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
