import React, { useState } from 'react';

const WireAlert = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] bg-green-100 border border-green-400 text-green-900 px-6 py-4 rounded-xl shadow-md">
      <div className="flex justify-between items-start gap-4">
        <div>
          <strong className="block text-lg mb-1">💡 Tip:</strong>
          <span className="text-sm leading-relaxed">
            Pull the wire on the <strong>right side</strong> <span className="font-bold">twice</span> to enable dark mode!
          </span>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-green-800 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WireAlert;
