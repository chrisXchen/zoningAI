import { useEffect, useState } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Button } from '@supabase/ui';

export default function DisplayProfile({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  async function getProfile() {
    try {
      setLoading(true);
      console.log(user)

      let { data, error, status } = await supabase
        .from("profiles")
        .select("city, state")
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCity(data.city);
        setState(data.state);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfile()
  }, [session])

  async function updateProfile({
    city,
    state
  }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        city,
        state,
        updated_at: new Date().toISOString()
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={city || ''}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          id="state"
          type="text"
          value={state || ''}
          onChange={(e) => setState(e.target.value)}
        />
      </div>

      <div>
        <Button
          block
          type="primary"
          size="medium"
          onClick={() => updateProfile({ city, state })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </Button>
      </div>

      <div>
        <Button
          block
          type="outline"
          size="medium"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}
