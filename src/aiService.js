const { BardAPI } = require('bard-api-node');

const aiService = {

  bard_request: async function(session, token, queryStr, say) {
    try {
      const assistant = new BardAPI();

      // Set session information for authentication
      console.log('session:', session);
      console.log('token:', token);
      await assistant.setSession(session, token);
      // ...

      // Send a query to Bard
      const response = await assistant.getBardResponse(queryStr);
      console.log('Bard:', response.content);
      say(response.content)

    } catch (error) {
      console.error('Error:', error);
    }
  },

  openai_request: async function(session, token, queryStr, say) {
    // Dummy
  }
}

module.exports = aiService;