<script>
  import { onMount } from "svelte";
  import { customers } from "../../../stores/customers";
  export let params;

  let customer = { name: "", email: "" };

  onMount(async () => {
    customer = await customers.get(params.id);
  });

  async function updateCustomer() {
    await customers.update(params.id, customer);
    // Redirect or notify after update
  }

  async function deleteCustomer() {
    if (confirm("Are you sure you want to delete this customer?")) {
      await customers.remove(params.id);
      // Redirect or notify after deletion
    }
  }
</script>

<main class="p-8">
  <h1 class="text-xl font-bold mb-4">Edit Customer</h1>
  <form on:submit|preventDefault={updateCustomer} class="space-y-4">
    <div>
      <label class="block mb-2">Name</label>
      <input bind:value={customer.name} class="border p-2 w-full" required />
    </div>
    <div>
      <label class="block mb-2">Email</label>
      <input type="email" bind:value={customer.email} class="border p-2 w-full" required />
    </div>
    <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded">Update</button>
    <button on:click={deleteCustomer} class="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
  </form>
</main>
