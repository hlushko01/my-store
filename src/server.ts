// server.ts
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }
  
  export async function getProducts(): Promise<Product[]> {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Помилка отримання даних');
      }
      const data: Product[] = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error('Помилка обробки запиту');
    }
  }
  