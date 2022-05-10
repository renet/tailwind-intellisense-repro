const liquidPreset = require("@emdgroup-liquid/liquid/dist/css/tailwind-preset.js");

module.exports = {
  content: ["./**/*.html"],
  plugins: [],
  presets: [liquidPreset],
  theme: {
    extend: {},
  },
};
