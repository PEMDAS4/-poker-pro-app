"use client"

import React, { useState } from "react"

const PokerHandMatrix = () => {
  // ... (todo el código existente del componente PokerHandMatrix)

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Matriz de Manos de Póker</h2>

      <div className="flex flex-col lg:flex-row gap-4">{/* ... (todo el contenido existente del componente) */}</div>

      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Selecciona una posición para ver el rango de apertura recomendado</p>
        <p className="mt-2">Rojo = Pares | Azul = Suited | Verde claro = Offsuit | Verde oscuro = Acción específica</p>
      </div>
    </div>
  )
}

export default PokerHandMatrix

