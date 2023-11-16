// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2

import dotenv from 'dotenv';
dotenv.config();
const {
    SUPABASE_URL,
    SECRET_KEY
} = process.env;

// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(SUPABASE_URL, SECRET_KEY);

// Our standard serverless handler function
const handler = async (event) => {
  try {
    const { data, error } = await supabase
    .from('articles')
    .select()
    .then(resp=>resp.json())

    console.log(data, error);
  } catch (error) {
    console.error('An error occurred:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
  
}

module.exports = { handler }
