# Amazon Clone - Full Stack Project
Welcome to the README for the Amazon Clone, a full-stack project built with React, Firebase, and Stripe. This comprehensive e-commerce platform includes features such as a home page, cart, payment processing, orders, and user authentication. The integration with Stripe enables real-time payment processing for a seamless user experience.

## Features
- **Home Page**: Explore a variety of products on the home page.
- **Cart**: Add products to your cart for easy checkout.
- **Payment Processing**: Utilize Stripe for secure and real-time payment transactions.
- **Orders**: View and track your order history.
- **User Authentication**: Securely log in, sign up, and manage your account.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A platform for building web and mobile applications, providing real-time database and authentication services.
- **Stripe**: A technology company that provides payment processing solutions.

## How to Use
1. Clone the repository to your local machine:
```
git clone https://github.com/amanpathra/amazon-clone.git
```
2. Navigate to the project directory:
```
cd amazon-clone
```
3. Install dependencies:
```
npm install
```
4. Set up Firebase:
5. Create a Firebase project on the Firebase Console.
6. Obtain your Firebase configuration details.
7. Create a .env file in the project root and add your Firebase configuration:
```
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```
8. Set up Stripe:
    - Create a Stripe account and obtain your public and secret keys.
    - Update the Stripe public key in the src/App.js file.

9. Start the application:
```
npm start
```
10. Open your web browser and go to http://localhost:3000 to access the Amazon Clone.

## Project Structure
- **src/**: Directory containing the React components, styles, and utility functions.
- **components/**: React components for building the Amazon Clone.
- **context/**: Context API setup for global state management.
- **firebase/**: Firebase configuration and utility functions.

## Contributing
Feel free to contribute to the project by submitting issues or pull requests. Your feedback and contributions are highly appreciated!

## Acknowledgments
Thanks to the React community for providing a powerful framework.
Special thanks to Firebase for providing a comprehensive backend solution.
Appreciation to Stripe for enabling secure and efficient payment processing.
Gratitude to the open-source community for valuable resources and support.