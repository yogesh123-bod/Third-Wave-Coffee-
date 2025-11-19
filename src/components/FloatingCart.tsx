import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shake, setShake] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Premium Blend Coffee',
      price: 899,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Gift Box Deluxe',
      price: 2499,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=100&h=100&fit=crop'
    }
  ]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
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
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-coffee text-cream rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 flex items-center justify-center group ${
          shake ? 'animate-[shake_0.5s_ease-in-out]' : ''
        }`}
        style={{
          animation: shake ? 'shake 0.5s ease-in-out' : undefined
        }}
      >
        <ShoppingCart className="w-6 h-6 transition-transform group-hover:scale-110" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground rounded-full text-xs flex items-center justify-center font-bold animate-pulse-glow">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Preview Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-background dark:bg-card border-l border-border shadow-2xl z-50 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border bg-muted/30">
            <h3 className="font-heading text-2xl font-bold text-foreground">Your Cart</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-xl bg-muted/50 dark:bg-muted/20 border border-border hover:shadow-soft transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{item.name}</h4>
                    <p className="text-accent font-bold mb-2">₹{item.price}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full bg-background dark:bg-muted border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-medium text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => {
                          updateQuantity(item.id, 1);
                          triggerShake();
                        }}
                        className="w-6 h-6 rounded-full bg-background dark:bg-muted border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-destructive hover:text-destructive/80 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-border bg-muted/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium text-foreground">Total</span>
                <span className="text-2xl font-bold text-accent">₹{totalPrice}</span>
              </div>
              <Button variant="premium" size="lg" className="w-full">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-coffee-dark/50 dark:bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}

      <style>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-10deg); }
          20%, 40%, 60%, 80% { transform: rotate(10deg); }
        }
      `}</style>
    </>
  );
};

export default FloatingCart;
