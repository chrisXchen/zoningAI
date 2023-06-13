import { NowRequest, NowResponse } from '@vercel/node'
import { supabaseClient } from '../../utils/supabaseClient'

export const config = {
  runtime: "edge"
}

export default async function signUp(req: NowRequest, res: NowResponse) {
  const d = await req.json();
  const email = d.email;
  const password = d.password;
  const city = d.city;
  const state = d.state;

  const { error, data } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        city: city,
        state: state
      }
    }
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
  console.log(data)
  return new Response(JSON.stringify({ data: data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
}

