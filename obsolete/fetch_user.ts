import { NowRequest, NowResponse } from '@vercel/node'
import { supabaseClient } from '../../utils/supabaseClient'

export const config = {
  runtime: "edge"
}

export default async function handler(req: NowRequest, res: NowResponse) {
  const { error, data } = await supabaseClient.auth.getUser()

  if (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }

  console.log(data);
  return new Response(JSON.stringify({ data: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  })

}
