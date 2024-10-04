<script>
  import { customers } from "../../../stores/customers";
  let customer = { name: "", email: "" };

  async function createCustomer() {
    await customers.create(customer);
    // Redirect or clear the form after creation
  }
</script>

<main class="p-8">
  <h1 class="text-xl font-bold mb-4">Create Customer</h1>
  <form on:submit|preventDefault={createCustomer} class="space-y-4">
    <div>
      <label class="block mb-2">Name</label>
      <input bind:value={customer.name} class="border p-2 w-full" required />
    </div>
    <div>
      <label class="block mb-2">Email</label>
      <input type="email" bind:value={customer.email} class="border p-2 w-full" required />
    </div>
    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Create</button>
  </form>
</main>
