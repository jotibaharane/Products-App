# Product App

## Description

Product App is a React Native mobile application that fetches and displays a list of products from a remote API. Users can view detailed information about each product, including the product name, description, price, and image.

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.

## Usage

To start the development server and run the application on your device or emulator, use the following commands:

- For Android: `npm run android`
- For iOS: `npm run ios`
- For web: `npm run web`

## Features

- Display a list of products with images.
- View detailed information about each product.
- Search functionality to filter products based on keywords.

## API Integration

This application fetches product data from the provided API: [DummyJSON Products API](https://dummyjson.com/products). Product details are retrieved by appending the product ID to the base URL.

## User Interaction

- Users can tap/click on a product card to view detailed information about the selected product.
- Navigation controls are provided on the product details screen to return to the product list.

## Styling and UI/UX

The application implements a visually appealing design for both the product list and detailed screens, ensuring a responsive and user-friendly interface.

## Additional Considerations

- Loading indicators are displayed gracefully to handle loading states.
- Error handling is implemented for cases where the API request fails.
- Performance optimizations are applied for smooth user interactions.

## Known Issues

- No known issues at the moment.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss potential changes.

## License

This project is licensed under the [MIT License](LICENSE).
