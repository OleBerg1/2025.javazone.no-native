module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        [
          'react-native-iconify/babel',
          {
            icons: [
              'mdi:heart',
              'mdi:home',
              'mdi:account',
              'feather:activity',
            ],
          },
        ]
    ]
  };
};
