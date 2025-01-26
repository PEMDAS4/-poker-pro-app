"use client"

import React, { useState } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Herramienta() {
  const ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"]
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const ranges = {
    UTG: {
      pairs: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77"],
      suited: ["AKs", "AQs", "AJs", "ATs", "A9s", "KQs", "KJs", "KTs", "QJs", "QTs", "JTs"],
      offsuit: ["AKo", "AQo", "AJo", "KQo"],
    },
    HJ: {
      pairs: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66"],
      suited: ["AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "KQs", "KJs", "KTs", "K9s", "QJs", "QTs", "JTs", "J9s"],
      offsuit: ["AKo", "AQo", "AJo", "ATo", "KQo", "KJo"],
    },
    CO: {
      pairs: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55"],
      suited: [
        "AKs",
        "AQs",
        "AJs",
        "ATs",
        "A9s",
        "A8s",
        "A7s",
        "A6s",
        "A5s",
        "KQs",
        "KJs",
        "KTs",
        "K9s",
        "K8s",
        "K7s",
        "QJs",
        "QTs",
        "Q9s",
        "Q8s",
        "JTs",
        "J9s",
        "J8s",
        "T9s",
        "T8s",
        "98s",
      ],
      offsuit: ["AKo", "AQo", "AJo", "ATo", "A9o", "KQo", "KJo", "KTo", "QJo"],
    },
    BTN: {
      pairs: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66", "55", "44", "33", "22"],
      suited: [
        "AKs",
        "AQs",
        "AJs",
        "ATs",
        "A9s",
        "A8s",
        "A7s",
        "A6s",
        "A5s",
        "A4s",
        "A3s",
        "A2s",
        "KQs",
        "KJs",
        "KTs",
        "K9s",
        "K8s",
        "K7s",
        "K6s",
        "K5s",
        "K4s",
        "K3s",
        "K2s",
        "QJs",
        "QTs",
        "Q9s",
        "Q8s",
        "Q7s",
        "Q6s",
        "Q5s",
        "JTs",
        "J9s",
        "J8s",
        "J7s",
        "T9s",
        "T8s",
        "T7s",
        "98s",
        "97s",
        "87s",
        "86s",
        "76s",
        "65s",
        "54s",
      ],
      offsuit: [
        "AKo",
        "AQo",
        "AJo",
        "ATo",
        "A9o",
        "A8o",
        "A7o",
        "A6o",
        "A5o",
        "A4o",
        "A3o",
        "A2o",
        "KQo",
        "KJo",
        "KTo",
        "K9o",
        "QJo",
        "QTo",
        "Q9o",
        "JTo",
        "J9o",
      ],
    },
    SB: {
      pairs: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66"],
      suited: [
        "AKs",
        "AQs",
        "AJs",
        "ATs",
        "A9s",
        "A8s",
        "A7s",
        "A6s",
        "A5s",
        "A4s",
        "A3s",
        "A2s",
        "KQs",
        "KJs",
        "KTs",
        "K9s",
        "K8s",
        "K7s",
        "K6s",
        "K5s",
        "QJs",
        "QTs",
        "Q9s",
        "Q8s",
        "Q7s",
        "JTs",
        "J9s",
        "J8s",
        "T9s",
        "T8s",
        "98s",
      ],
      offsuit: ["AKo", "AQo", "AJo", "ATo", "A9o", "A8o", "A7o", "KQo", "KJo", "KTo", "QJo"],
    },
    BB: {
      pairs: ["AA", "KK", "QQ", "JJ", "TT", "99", "88", "77", "66"],
      suited: [
        "AKs",
        "AQs",
        "AJs",
        "ATs",
        "A9s",
        "A8s",
        "A7s",
        "A6s",
        "A5s",
        "A4s",
        "A3s",
        "A2s",
        "KQs",
        "KJs",
        "KTs",
        "K9s",
        "K8s",
        "K7s",
        "K6s",
        "K5s",
        "QJs",
        "QTs",
        "Q9s",
        "Q8s",
        "Q7s",
        "JTs",
        "J9s",
        "J8s",
        "T9s",
        "T8s",
        "98s",
      ],
      offsuit: ["AKo", "AQo", "AJo", "ATo", "A9o", "KQo", "KJo", "KTo", "QJo"],
    },
  }

  const actionRanges: { [key: string]: { [key: string]: string[] } } = {
    UTG: {
      Raise: [
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "KTs",
        "KJs",
        "KQs",
        "QTs",
        "JTs",
        "AJo",
        "AQo",
        "AKo",
        "KQo",
      ],
      "3Bet": ["QQ", "KK", "AA", "AKs", "AKo"],
      "4Bet": ["KK", "AA", "AKs"],
      Squeeze: [],
    },
    HJ: {
      Raise: [
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "QTs",
        "JTs",
        "J9s",
        "T9s",
        "ATo",
        "AJo",
        "AQo",
        "AKo",
        "KJo",
        "KQo",
      ],
      "3Bet": ["JJ", "QQ", "KK", "AA", "AQs", "AKs", "AKo"],
      "4Bet": ["QQ", "KK", "AA", "AKs", "AKo"],
      Squeeze: [],
    },
    CO: {
      Raise: [
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A2s",
        "A3s",
        "A4s",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K8s",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "Q9s",
        "QTs",
        "QJs",
        "J9s",
        "JTs",
        "T8s",
        "T9s",
        "98s",
        "ATo",
        "AJo",
        "AQo",
        "AKo",
        "KJo",
        "KQo",
      ],
      "3Bet": ["TT", "JJ", "QQ", "KK", "AA", "AQo", "AKo", "AJs", "AQs", "AKs"],
      "4Bet": ["JJ", "QQ", "KK", "AA", "AKs", "AKo"],
      Squeeze: [],
    },
    BTN: {
      Raise: [
        "22",
        "33",
        "44",
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A2s",
        "A3s",
        "A4s",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K2s",
        "K3s",
        "K4s",
        "K5s",
        "K6s",
        "K7s",
        "K8s",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "Q8s",
        "Q9s",
        "QTs",
        "QJs",
        "J8s",
        "J9s",
        "JTs",
        "T7s",
        "T8s",
        "T9s",
        "97s",
        "98s",
        "87s",
        "A7o",
        "A8o",
        "A9o",
        "ATo",
        "AJo",
        "AQo",
        "AKo",
        "K9o",
        "KTo",
        "KJo",
        "KQo",
        "Q9o",
        "QTo",
        "QJo",
        "J9o",
        "JTo",
      ],
      "3Bet": ["99", "TT", "JJ", "QQ", "KK", "AA", "AQo", "AKo", "ATs", "AJs", "AQs", "AKs", "KJs", "QJs"],
      "4Bet": ["TT", "JJ", "QQ", "KK", "AA", "AQs", "AKs", "AKo"],
      Squeeze: [],
    },
    SB: {
      "SB Defense 2bb": [
        "33",
        "44",
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A3s",
        "A4s",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K8s",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "QTs",
        "QJs",
        "JTs",
        "AJo",
        "AQo",
        "AKo",
        "KQo",
      ],
      "SB Defense 2.5bb": [
        "44",
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A4s",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "QTs",
        "QJs",
        "JTs",
        "ATs",
        "AJo",
        "AQo",
        "AKo",
        "KQo",
      ],
      "SB Defense 3bb+": [
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "KTs",
        "KJs",
        "KQs",
        "QJs",
        "JTs",
        "AJo",
        "AQo",
        "AKo",
        "KQo",
      ],
      Raise: [
        "22",
        "33",
        "44",
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A2s",
        "A3s",
        "A4s",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K2s",
        "K3s",
        "K4s",
        "K5s",
        "K6s",
        "K7s",
        "K8s",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "Q6s",
        "Q7s",
        "Q8s",
        "Q9s",
        "QTs",
        "QJs",
        "J7s",
        "J8s",
        "J9s",
        "JTs",
        "T6s",
        "T7s",
        "T8s",
        "T9s",
        "96s",
        "97s",
        "98s",
        "86s",
        "87s",
        "A2o",
        "A3o",
        "A4o",
        "A5o",
        "A6o",
        "A7o",
        "A8o",
        "A9o",
        "ATo",
        "AJo",
        "AQo",
        "AKo",
        "K7o",
        "K8o",
        "K9o",
        "KTo",
        "KJo",
        "KQo",
        "Q8o",
        "Q9o",
        "QTo",
        "QJo",
        "J8o",
        "J9o",
        "JTo",
        "T8o",
        "T9o",
      ],
      "3Bet": [
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "AJo",
        "AQo",
        "AKo",
        "KQo",
        "ATo",
        "KTs",
        "QTs",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
      ],
      "4Bet": ["99", "TT", "JJ", "QQ", "KK", "AA", "AQs", "AKs", "AKo"],
      Squeeze: ["99", "TT", "JJ", "QQ", "KK", "AA", "AJs", "AQs", "AKs", "AQo", "AKo", "KQs"],
    },
    BB: {
      Raise: [
        "22",
        "33",
        "44",
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A2s",
        "A3s",
        "A4s",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K2s",
        "K3s",
        "K4s",
        "K5s",
        "K6s",
        "K7s",
        "K8s",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "Q5s",
        "Q6s",
        "Q7s",
        "Q8s",
        "Q9s",
        "QTs",
        "QJs",
        "J6s",
        "J7s",
        "J8s",
        "J9s",
        "JTs",
        "T5s",
        "T6s",
        "T7s",
        "T8s",
        "T9s",
        "95s",
        "96s",
        "97s",
        "98s",
        "85s",
        "86s",
        "87s",
        "A2o",
        "A3o",
        "A4o",
        "A5o",
        "A6o",
        "A7o",
        "A8o",
        "A9o",
        "ATo",
        "AJo",
        "AQo",
        "AKo",
        "K5o",
        "K6o",
        "K7o",
        "K8o",
        "K9o",
        "KTo",
        "KJo",
        "KQo",
        "Q7o",
        "Q8o",
        "Q9o",
        "QTo",
        "QJo",
        "J8o",
        "J9o",
        "JTo",
        "T7o",
        "T8o",
        "T9o",
        "97o",
        "98o",
      ],
      "3Bet": [
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "AJo",
        "AQo",
        "AKo",
        "KQo",
        "ATo",
        "KJs",
        "QJs",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
      ],
      "4Bet": ["99", "TT", "JJ", "QQ", "KK", "AA", "AQs", "AKs", "AKo"],
      Squeeze: ["88", "99", "TT", "JJ", "QQ", "KK", "AA", "ATs", "AJs", "AQs", "AKs", "AQo", "AKo", "KQs", "QJs"],
      "BB Defense 2bb": [
        "22",
        "33",
        "44",
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A2s",
        "A3s",
        "A4s",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K5s",
        "K6s",
        "K7s",
        "K8s",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "Q7s",
        "Q8s",
        "Q9s",
        "QTs",
        "QJs",
        "J8s",
        "J9s",
        "JTs",
        "T8s",
        "T9s",
        "98s",
        "87s",
        "76s",
        "65s",
        "54s",
        "A2o",
        "A3o",
        "A4o",
        "A5o",
        "A6o",
        "A7o",
        "A8o",
        "A9o",
        "ATo",
        "AJo",
        "AQo",
        "AKo",
        "K9o",
        "KTo",
        "KJo",
        "KQo",
        "QJo",
      ],
      "BB Defense 2.5bb": [
        "33",
        "44",
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A2s",
        "A3s",
        "A4s",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K7s",
        "K8s",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "Q9s",
        "QTs",
        "QJs",
        "J9s",
        "JTs",
        "T9s",
        "ATo",
        "AJo",
        "AQo",
        "AKo",
        "KTo",
        "KJo",
        "KQo",
        "QJo",
      ],
      "BB Defense 3bb+": [
        "44",
        "55",
        "66",
        "77",
        "88",
        "99",
        "TT",
        "JJ",
        "QQ",
        "KK",
        "AA",
        "A4s",
        "A5s",
        "A6s",
        "A7s",
        "A8s",
        "A9s",
        "ATs",
        "AJs",
        "AQs",
        "AKs",
        "K9s",
        "KTs",
        "KJs",
        "KQs",
        "QTs",
        "QJs",
        "JTs",
        "ATs",
        "AJo",
        "AQo",
        "AKo",
        "KQo",
      ],
    },
  }

  const calculateRangeStats = (range) => {
    const totalCombos = 1326
    const pairCombos = range.pairs.length * 6
    const suitedCombos = range.suited.length * 4
    const offsuitCombos = range.offsuit.length * 12
    const totalRangeCombos = pairCombos + suitedCombos + offsuitCombos
    return {
      percentage: ((totalRangeCombos / totalCombos) * 100).toFixed(1),
      combos: totalRangeCombos,
    }
  }

  const positionInfo = {
    UTG: {
      title: "Under the Gun (UTG)",
      description: "UTG es la posición más temprana y difícil. Se juega un rango muy fuerte porque:",
      reasons: [
        "Todos los demás jugadores actuarán después",
        "Mayor riesgo de enfrentar 3-bets",
        "Se necesitan manos que jueguen bien fuera de posición",
      ],
    },
    HJ: {
      title: "Hijack (HJ)",
      description: "HJ es una posición media-tardía que permite ampliar el rango porque:",
      reasons: [
        "Solo quedan 3 jugadores por actuar",
        "Mejor posición post-flop contra los blinds",
        "Posibilidad de robar blinds con más frecuencia",
      ],
    },
    CO: {
      title: "Cut-off (CO)",
      description: "CO es una posición tardía que permite jugar un rango más amplio porque:",
      reasons: [
        "Solo quedan 2 jugadores por actuar",
        "Excelente posición para robar blinds",
        "Buena posición post-flop en la mayoría de las manos",
      ],
    },
    BTN: {
      title: "Button (BTN)",
      description: "BTN es la mejor posición. Se juega el rango más amplio porque:",
      reasons: [
        "Siempre tendrás posición post-flop",
        "Máxima información de los oponentes",
        "Puedes jugar muchas manos especulativas",
        "Mejor posición para robar blinds",
      ],
    },
    SB: {
      title: "Small Blind (SB)",
      description: "SB es una posición difícil. Se juega un rango selecto porque:",
      reasons: [
        "Ya has invertido 0.5BB en el bote",
        "Jugarás fuera de posición post-flop",
        "Vulnerable a squeeze plays",
        "Se necesitan manos que jueguen bien OOP",
      ],
    },
    BB: {
      title: "Big Blind (BB)",
      description: "BB es una posición defensiva. Se defiende un rango amplio porque:",
      reasons: [
        "Ya has invertido 1BB en el bote",
        "Tienes odds favorables para defender",
        "Puedes jugar más manos especulativas",
        "Último en actuar preflop",
      ],
    },
  }

  const isInRange = (hand: string, position: string | null, action: string | null) => {
    if (!position || !ranges[position]) return false
    if (action && actionRanges[position][action]) {
      return actionRanges[position][action].includes(hand)
    }
    if (hand.length === 2) return ranges[position].pairs.includes(hand)
    const suited = hand.endsWith("s")
    return suited ? ranges[position].suited.includes(hand) : ranges[position].offsuit.includes(hand)
  }

  const getHandType = (hand) => {
    if (hand.length === 2) return "pair"
    return hand.endsWith("s") ? "suited" : "offsuit"
  }

  const tableData = ranks.map((rowRank, rowIndex) =>
    ranks.map((colRank, colIndex) => {
      if (rowIndex === colIndex) {
        return `${rowRank}${rowRank}`
      } else if (rowIndex < colIndex) {
        return `${rowRank}${colRank}s`
      } else {
        return `${colRank}${rowRank}o`
      }
    }),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Herramienta de Rangos de Póker</h1>
          <div className="w-full p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Matriz de Manos de Póker</h2>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg">
                  <thead>
                    <tr>
                      <th className="p-2 border border-gray-300 bg-gray-100"></th>
                      {ranks.map((rank) => (
                        <th key={rank} className="p-2 border border-gray-300 bg-gray-100 font-bold">
                          {rank}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, rowIndex) => (
                      <tr key={ranks[rowIndex]}>
                        <th className="p-2 border border-gray-300 bg-gray-100 font-bold">{ranks[rowIndex]}</th>
                        {row.map((cell, colIndex) => {
                          const hand = tableData[rowIndex][colIndex]
                          const inRange = selectedPosition && isInRange(hand, selectedPosition, selectedAction)
                          const handType = getHandType(hand)

                          let bgColor = "bg-white text-gray-400"
                          if (selectedPosition && isInRange(hand, selectedPosition, selectedAction)) {
                            if (
                              selectedAction &&
                              (selectedAction.startsWith("BB Defense") || selectedAction.startsWith("SB Defense"))
                            ) {
                              bgColor = "bg-green-600 text-white"
                            } else if (selectedAction) {
                              bgColor = "bg-green-600 text-white"
                            } else {
                              bgColor =
                                handType === "pair"
                                  ? "bg-red-400 text-white"
                                  : handType === "suited"
                                    ? "bg-blue-400 text-white"
                                    : "bg-green-400 text-white"
                            }
                          }

                          return (
                            <td
                              key={`${rowIndex}-${colIndex}`}
                              className={`p-2 text-center border border-gray-300 ${bgColor} font-bold`}
                            >
                              <span className="text-black">{cell}</span>
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="w-full lg:w-64 p-4 bg-white rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">Selecciona una posición</h2>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {["UTG", "BB", "HJ", "SB", "CO", "BTN"].map((pos) => (
                    <button
                      key={pos}
                      onClick={() => {
                        setSelectedPosition(pos === selectedPosition ? null : pos)
                        setSelectedAction(null)
                      }}
                      className={`p-2 rounded ${
                        selectedPosition === pos ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>

                <h2 className="text-lg font-bold mb-4">Selecciona una acción</h2>
                <div className="grid grid-cols-2 gap-2">
                  {selectedPosition === "BB"
                    ? ["BB Defense 2bb", "BB Defense 2.5bb", "BB Defense 3bb+", "Raise", "3Bet", "4Bet", "Squeeze"].map(
                        (action) => (
                          <button
                            key={action}
                            onClick={() => setSelectedAction(action === selectedAction ? null : action)}
                            className={`p-2 rounded ${
                              selectedAction === action ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            disabled={!selectedPosition}
                          >
                            {action}
                          </button>
                        ),
                      )
                    : selectedPosition === "SB"
                      ? [
                          "SB Defense 2bb",
                          "SB Defense 2.5bb",
                          "SB Defense 3bb+",
                          "Raise",
                          "3Bet",
                          "4Bet",
                          "Squeeze",
                        ].map((action) => (
                          <button
                            key={action}
                            onClick={() => setSelectedAction(action === selectedAction ? null : action)}
                            className={`p-2 rounded ${
                              selectedAction === action ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            disabled={!selectedPosition}
                          >
                            {action}
                          </button>
                        ))
                      : ["Raise", "3Bet", "4Bet", "Squeeze"].map((action) => (
                          <button
                            key={action}
                            onClick={() => setSelectedAction(action === selectedAction ? null : action)}
                            className={`p-2 rounded ${
                              selectedAction === action ? "bg-yellow-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                            }`}
                            disabled={!selectedPosition}
                          >
                            {action}
                          </button>
                        ))}
                </div>

                {selectedPosition && (
                  <div className="mt-4 space-y-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <h3 className="font-bold text-gray-700">Estadísticas</h3>
                      <p className="text-sm text-gray-600">
                        Rango: {calculateRangeStats(ranges[selectedPosition]).percentage}%<br />
                        Combinaciones: {calculateRangeStats(ranges[selectedPosition]).combos}
                      </p>
                    </div>

                    <div className="bg-blue-50 p-3 rounded">
                      <h3 className="font-bold text-gray-700">{positionInfo[selectedPosition].title}</h3>
                      <p className="text-sm text-gray-600 mt-2">{positionInfo[selectedPosition].description}</p>
                      <ul className="text-sm text-gray-600 list-disc pl-4 mt-2">
                        {positionInfo[selectedPosition].reasons.map((reason, index) => (
                          <li key={index} className="mt-1">
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Selecciona una posición para ver el rango de apertura recomendado</p>
              <p className="mt-2">
                Rojo = Pares | Azul = Suited | Verde claro = Offsuit | Verde oscuro = Acción específica
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

