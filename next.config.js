require("dotenv").config({
  path:
    `./env/.env.${process.env.NEXT_ENV}`,
    debug: true
});

module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    NEXT_ENV: process.env.NEXT_ENV,
    HIEP_TEST_ENV: process.env.HIEP_TEST_ENV,
  },
};
