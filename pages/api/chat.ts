import { NowRequest, NowResponse } from '@vercel/node'
import { supabaseClient } from '../../utils/supabaseClient'

export const config = {
  runtime: "edge"
}

function validateInput(text, city, state) {
  if (typeof text !== 'string' || typeof city !== 'string' || typeof state !== 'string') {
    throw new Error('All inputs must be of type string.');
  }

  if (!text || !city || !state) {
    throw new Error('None of the inputs can be undefined or null.');
  }
}

export default async function handler(req: NowRequest, res: NowResponse) {
  const d = await req.json()

  try {
    validateInput(d.text, d.city, d.state);
  } catch (err) {
    return new Response(JSON.stringify({ text: "Invalid Input! Message, City, and State must all be present and valid."},{
      status: 400,
      headers: {"Content-Type": "application/json"}
    }))  }

  const text = d.text;
  const city = d.city;
  const state = d.state;

  const { data, error } = await supabaseClient.functions.invoke('ask-custom-data', {
        body: JSON.stringify({ query: text, city: city, state: state})
    });

  if (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }

  return new Response(JSON.stringify({ text: data.message.content, found_at: data.found_at ? data.found_at : []}), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  })
}
