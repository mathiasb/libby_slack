require('dotenv').config();

const libby_config = {

  setup: function() {

    const SBT = process.env.SLACK_BOT_TOKEN;
    const SSS = process.env.SLACK_SIGNING_SECRET;

    const credentials = {
      SLACK_BOT_TOKEN: SBT,
      SLACK_SIGNING_SECRET: SSS
    };

    return credentials;
  }

}

module.exports = libby_config