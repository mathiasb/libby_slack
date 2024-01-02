const { App } = require("@slack/bolt");
require("dotenv").config();
const libby_config = require('./config.js');
const aiService = require('./aiService.js');

// Load configuration and credentials
conf = libby_config.setup();

// Initializes the Libby app with credentials
const app = new App({
  token: conf.SLACK_BOT_TOKEN,
  signingSecret: conf.SLACK_SIGNING_SECRET,
  socketMode: true, // Use WebSocket mode for local testing
  appToken: conf.APP_TOKEN
});

app.message("hey", async ({ command, say }) => {
    try {
      say("Hello Human!");
    } catch (error) {
      console.log("err")
      console.error(error);
    }
});

app.message("bard", async ({ command, say }) => {
    try {
      response = aiService.bard_request(conf.BARD_SESSION, conf.BARD_TOKEN, "what is the difference between bard and chatgpt", say);
    } catch (error) {
      console.log("err");
      console.error(error);
    }
  });

app.event('app_home_opened', async ({ event, client, context }) => {
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish({

      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: {
        type: 'home',
        callback_id: 'home_view',

        /* body of the view */
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Welcome to your _App's Home tab_* :tada:"
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app."
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Click me!"
                }
              }
            ]
          }
        ]
      }
    });
  }
  catch (error) {
    console.error(error);
  }
});

// Start the Libby App server
(async () => {
  // Bolt default port
  const port = 3000
  await app.start(conf.PORT || port);
  console.log('Libby app started!!');
})();