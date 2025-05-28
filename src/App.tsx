import React from 'react';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Toaster position="top-right" />
      <main className="container mx-auto px-4 py-8">
        <Home />
      </main>
    </div>
  );
}

export default App;