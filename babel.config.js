module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Mantém o plugin do reanimated
  ],
};

// This is the babel config for a React Native project.
// It uses the @react-native/babel-preset preset for React Native.
// It also includes the react-native-dotenv plugin to load environment variables from a .env file.
