import { NowRequest, NowResponse } from '@vercel/node'
import { supabaseClient } from '../../utils/supabaseClient'

export const config = {
  runtime: "edge"
}

export default async function signIn(req: NowRequest, res: NowResponse) {
  const d = await req.json();
  const email = d.email;
  const password = d.password;

  const { error, data } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response(JSON.stringify({ data: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  })

}
