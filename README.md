# DBank V1.0

A **simple** and **unique** WEB 3.0 Dapplication developed with the use of **FrontEnd** and **BackEnd**.

## Technologies used

  * HTML, CSS, Javascript
  * **React.Js, vite**
  * **Nodejs, npm**
  * **Motoko (Backend)**

## Features

This version of application will allow users to add and withdraw amount (fake). Amount will persist between sessions as stable state is used in storing amount.

## Authors

  - **Prabhat Kumar Mishra**
    [pkm774](https://pkm774.github.io/)

## Acknowledgments

  * A WEB 3.0 Capstone Project developed under Web Development Bootcamp by Angela Yu.
  
## Usage
## Running the project locally

If you want to test this project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, this application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to the backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

## License

![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)

This project is licensed under the MIT License.

Copyright (c) 2024 Prabhat Kumar Mishra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.