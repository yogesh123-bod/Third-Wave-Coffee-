import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  variant?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: number, change: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(items => {
      const existingItem = items.find(i => i.id === item.id && i.variant === item.variant);
      if (existingItem) {
        toast({
          title: "Updated cart",
          description: `Increased quantity of ${item.name}`,
        });
        return items.map(i =>
          i.id === item.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart`,
      });
      return [...items, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
