<script lang="ts">
  import AuthCheck from "$lib/components/Auth_Check.svelte";
  import { db, user } from "$lib/firebase";
  import { doc, getDoc, writeBatch } from "firebase/firestore";

  let username = "";
  let loading = false;
  let isAvailable = false;

  let debounceTimer;

  async function checkAvailability () {
    isAvailable = false;
    clearTimeout(debounceTimer);

    loading = true;

    debounceTimer = setTimeout(async () => {
      console.log("checking availability for ", username)

      const ref = doc(db, "usernames", username);
      const exists = await getDoc(ref).then(doc => doc.exists());

      isAvailable = !exists;
      loading = false;
    }, 500);
  }
  async function confirmUsername () {}
</script>

<AuthCheck>
  <h2>Username</h2>
  <form class="w-2/5" on:submit|preventDefault={confirmUsername}>
    <input 
      type="text"
      placeholder="Username"
      class="input w-full"
      bind:value={username}
      on:input={checkAvailability}
    />

    <p>Is is available? {isAvailable}</p>

    <button class="btn btn-success">Confirm username @{username} </button>
  </form>
</AuthCheck>