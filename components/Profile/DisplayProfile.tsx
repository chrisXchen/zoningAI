import { useEffect, useState } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import FormButton from '../Form/FormButton';

export default function DisplayProfile({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  async function getProfile() {
    try {
      setLoading(true);

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
  }, [user])

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
        <div className="block">
          <label
            htmlFor="email"
            name="email"
            className="inline-block text-black text-2xl border-2 py-1 border-black
              px-2 bg-brand-tertiary text-center shadow-nb-assistant
              rounded-tl-xl rounded-tr-xl rounded-br-xl"
          >
            Email
          </label>
        </div>
        <input
          id="email"
          type="text"
          value={user.email}
          disabled
          className="text-black text-xl border-2 border-black
          bg-brand-tertiary bg-opacity-40 px-5 mt-2
          rounded-bl-xl rounded-br-xl rounded-tr-xl w-auto"
        />
      </div>
      <div>
        <div className="block">
          <label
            htmlFor="city"
            name="city"
            className="inline-block text-black text-2xl border-2 py-1 border-black
              px-2 bg-brand-tertiary text-center shadow-nb-assistant
              rounded-tl-xl rounded-tr-xl rounded-br-xl"
          >
            City
          </label>
        </div>
        <input
          id="city"
          type="text"
          value={city || ''}
          onChange={(e) => setCity(e.target.value)}
          className="text-black text-xl border-2 border-black
          bg-white px-5 mt-2
          focus:border-black focus:outline-none focus:border-4
          focus:text-white focus:bg-black
          rounded-bl-xl rounded-br-xl rounded-tr-xl
          hover:border-4
          transition-colors duration-200 ease-in-out"
        />
      </div>
      <div>
        <div className="block">
          <label
            htmlFor="state"
            name="state"
            className="inline-block text-black text-2xl border-2 py-1 border-black
              px-2 bg-brand-tertiary text-center shadow-nb-assistant
              rounded-tl-xl rounded-tr-xl rounded-br-xl"
          >
            State
          </label>
        </div>
        <input
          id="state"
          type="text"
          value={state || ''}
          onChange={(e) => setState(e.target.value)}
          className="text-black text-xl border-2 border-black
          bg-white px-5 mt-2
          focus:border-black focus:outline-none focus:border-4
          focus:text-white focus:bg-black
          rounded-bl-xl rounded-br-xl rounded-tr-xl
          hover:border-4
          transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="mt-6">
        <FormButton
          onClick={() => updateProfile({city, state})}
          disabled={loading}
          buttonText="Update Profile Info"
          loading={loading}
          textSize="text-m sm:text-l"
          bgColor="bg-brand-tertiary"
          shadow="shadow-nb-assistant"
        />
      </div>
      <div>
        <FormButton
          onClick={() => supabase.auth.signOut()}
          disabled={loading}
          buttonText="Sign Out"
          loading={loading}
          textSize="text-m sm:text-l"
          bgColor="bg-brand-secondary"
          shadow="shadow-nb-assistant"
        />
      </div>
    </div>
  )
}
