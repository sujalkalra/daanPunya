const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const configJS = `
window.ENV = {
  RAZORPAY_KEY: "${process.env.VITE_RAZORPAY_KEY}",
  GOOGLE_SCRIPT_URL: "${process.env.VITE_GOOGLE_SCRIPT_URL}"
};
`;

fs.writeFileSync('./assets/env-config.js', configJS);
console.log("✅ env-config.js generated from .env");
