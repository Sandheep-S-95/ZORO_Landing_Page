import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '916383724093'; // Replace with your WhatsApp number
  const message = 'Hello! I would like to enquire about.'; // Replace with your default message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 text-white px-4 py-3 lg:py-3 lg:px-4 md:py-2 md:px-3 sm:py-1 sm:px-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
      aria-label="Contact us"
      style={{ minWidth: '180px', height: '60px' }}
    >
      <MessageCircle size={32} />
      <span className="font-semibold text-lg">Contact Us</span>
    </button>
  );
};

export default WhatsAppButton;
