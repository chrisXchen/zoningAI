import { NowRequest, NowResponse } from '@vercel/node'
import { supabaseClient } from '../../utils/supabaseClient'

export const config = {
  runtime: "edge"
}

export default async function handler(req: NowRequest, res: NowResponse) {
  const d = await req.json()
  const text = d.text;

  const { data, error } = await supabaseClient.functions.invoke('ask-custom-data', {
        body: JSON.stringify({ query: text})
    });

  if (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }

  return new Response(JSON.stringify({ text: data.text }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  })
}
