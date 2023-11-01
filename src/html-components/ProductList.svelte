<script lang="ts">
  import { onMount } from 'svelte';

  let products: [] = []; // Тип `any[]` означає масив будь-яких об'єктів.

  onMount(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Помилка отримання даних');
      }
      products = await response.json();
    } catch (error: any) {
      console.error(error.message);
      // Обробити помилку
    }
  });
</script>


  
  {#if products.length > 0}
    <!-- Відображення списку продуктів, якщо вони є -->
    <div class="flex flex-wrap">
      {#each products as product (product.id)}
        <div class="w-1/3 p-4">
          <div class="bg-gray-200 p-4">
            <img src="{product.image}" alt="{product.title}" class="w-full h-full object-cover mb-2">
            <div class="bg-gray-400 p-2">
              <h3 class="text-lg font-bold">{product.title}</h3>
              <p class="text-sm">{product.description}</p>
              <p class="text-sm font-bold">${product.price}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <!-- Відображення повідомлення "Loading...", якщо дані ще завантажуються -->
    <p>Loading...</p>
  {/if}
  
  <style>
    img{
        aspect-ratio: 1/1.5;
    }
  </style>