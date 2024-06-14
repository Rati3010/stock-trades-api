# Stock Trades API

A simple REST API to manage a collection of stock trades using Node.js, Express, and a JSON file as the database.

## Features

- Create a new trade
- Retrieve all trades
- Retrieve a trade by ID
- Delete a trade by ID
- Update the price of a trade by ID
- Logging for HTTP requests

## Requirements

- Node.js
- npm

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/stock-trades-api.git
    cd stock-trades-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `trades.json` file in the root directory with an initial empty array:

    ```json
    []
    ```

## Usage

1. Start the server:

    ```bash
    node index.js
    ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

### Create a Trade

- **URL:** `/trades`
- **Method:** `POST`
- **Body:**

    ```json
    {
      "type": "buy",
      "user_id": 1,
      "symbol": "AAPL",
      "shares": 20,
      "price": 150
    }
    ```

- **Response:**

    ```json
    {
      "id": 1,
      "type": "buy",
      "user_id": 1,
      "symbol": "AAPL",
      "shares": 20,
      "price": 150
    }
    ```

### Get All Trades

- **URL:** `/trades`
- **Method:** `GET`
- **Response:**

    ```json
    {
      "trades": [
        {
          "id": 1,
          "type": "buy",
          "user_id": 1,
          "symbol": "AAPL",
          "shares": 20,
          "price": 150
        }
        // More trade objects...
      ]
    }
    ```

### Get a Trade by ID

- **URL:** `/trades/:id`
- **Method:** `GET`
- **Response:**

    ```json
    {
      "id": 1,
      "type": "buy",
      "user_id": 1,
      "symbol": "AAPL",
      "shares": 20,
      "price": 150
    }
    ```

- **404 Response:**

    ```text
    ID not found
    ```

### Delete a Trade by ID

- **URL:** `/trades/:id`
- **Method:** `DELETE`
- **Response:**

    ```text
    Trade with ID 1 deleted
    ```

- **404 Response:**

    ```text
    ID not found
    ```

### Update the Price of a Trade by ID

- **URL:** `/trades/:id`
- **Method:** `PATCH`
- **Body:**

    ```json
    {
      "price": 200
    }
    ```

- **Response:**

    ```json
    {
      "id": 1,
      "type": "buy",
      "user_id": 1,
      "symbol": "AAPL",
      "shares": 20,
      "price": 200
    }
    ```

- **404 Response:**

    ```text
    ID not found
    ```

## Logging

The API uses **morgan** middleware for logging. Each request logs the following information:

- HTTP method
- Request URL
- Response status code
- Response time
- Date and time of the request

## Example Requests

### Create a Trade

    ```bash
    curl -X POST http://localhost:3000/trades -H "Content-Type: application/json" -d '{"type":"buy","user_id":1,"symbol":"AAPL","shares":20,"price":150}'
    ```

### Get All Trades

    ```bash
    curl -X GET http://localhost:3000/trades
    ```

### Get a Trade by ID

    ```bash
    curl -X GET http://localhost:3000/trades/1
    ```

### Delete a Trade by ID

    ```bash
    curl -X DELETE http://localhost:3000/trades/1
    ```

### Update the Price of a Trade by ID

    ```bash
    curl -X PATCH http://localhost:3000/trades/1 -H "Content-Type: application/json" -d '{"price":200}'
    ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
