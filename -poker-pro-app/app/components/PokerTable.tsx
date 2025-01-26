'use client'

import React, { useState } from "react";

const PokerTable = () => {
  const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  // ... (rest of the component code, including ranges, positionInfo, and helper functions)

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Matriz de Manos de Póker</h1>
      
      {/* ... (rest of the JSX, including the table, position buttons, and info sections) */}
    </div>
  );
};

export default PokerTable;

