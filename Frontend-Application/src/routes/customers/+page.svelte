<script>
  import { onMount } from "svelte";
  import { customers } from "../../stores/customers";

  let customerList = [];

  onMount(async () => {
    // Fetch all customers (from API or local storage for now)
    customerList = await customers.getAll();
  });
</script>

<main class="p-8">
  <h1 class="text-xl font-bold mb-4">Customers</h1>
  <table class="min-w-full bg-white shadow-md rounded-md overflow-hidden">
    <thead>
      <tr class="bg-gray-100 text-left">
        <th class="p-4">ID</th>
        <th class="p-4">Name</th>
        <th class="p-4">Email</th>
        <th class="p-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each customerList as customer}
        <tr>
          <td class="p-4">{customer.id}</td>
          <td class="p-4">{customer.name}</td>
          <td class="p-4">{customer.email}</td>
          <td class="p-4">
            <a href={`/customers/${customer.id}`} class="text-blue-500">Edit</a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>
