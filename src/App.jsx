import { useEffect, useState } from "react"

import CardForm from "./components/CardForm"
import CardsTable from "./components/CardsTable"
import StudyMode from "./components/StudyMode"

function App() {
  const [deck, setDeck] = useState(
    JSON.parse(localStorage.getItem("flashcards-deck")) || []
  )

  const [frontInput, setFrontInput] = useState("")
  const [backInput, setBackInput] = useState("")

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFront, setShowFront] = useState(true)

  const [mode, setMode] = useState("all")

  useEffect(() => {
    localStorage.setItem(
      "flashcards-deck",
      JSON.stringify(deck)
    )
  }, [deck])

  const addCard = () => {
    if (!frontInput || !backInput) {
      alert("Заполните оба поля")
      return
    }

    const card = {
      id: Date.now(),
      front: frontInput,
      back: backInput,
      learned: false
    }

    setDeck([...deck, card])

    setFrontInput("")
    setBackInput("")
  }

  const deleteCard = (id) => {
    setDeck(
      deck.filter((card) => card.id !== id)
    )
  }

  const editCard = (id) => {
    const card = deck.find(
      (card) => card.id === id
    )

    setFrontInput(card.front)
    setBackInput(card.back)

    deleteCard(id)
  }

  const toggleLearned = (id) => {
    setDeck(
      deck.map((card) =>
        card.id === id
          ? {
              ...card,
              learned: !card.learned
            }
          : card
      )
    )
  }

  const getStudyDeck = () => {
    if (mode === "unlearned") {
      return deck.filter(
        (card) => !card.learned
      )
    }

    return deck
  }

  const flipCard = () => {
    if (getStudyDeck().length === 0) return

    setShowFront(!showFront)
  }

  const nextCard = () => {
    const studyDeck = getStudyDeck()

    if (studyDeck.length === 0) return

    let newIndex = currentIndex + 1

    if (newIndex >= studyDeck.length) {
      newIndex = 0
    }

    setCurrentIndex(newIndex)
    setShowFront(true)
  }

  const prevCard = () => {
    const studyDeck = getStudyDeck()

    if (studyDeck.length === 0) return

    let newIndex = currentIndex - 1

    if (newIndex < 0) {
      newIndex = studyDeck.length - 1
    }

    setCurrentIndex(newIndex)
    setShowFront(true)
  }

  const shuffleCards = () => {
    const shuffled = [...deck].sort(
      () => Math.random() - 0.5
    )

    setDeck(shuffled)
    setCurrentIndex(0)
    setShowFront(true)
  }

  const studyDeck = getStudyDeck()

  const currentCard =
    studyDeck[currentIndex]

  return (
    <>
      <h1>Карточки (Flashcards)</h1>

      <CardForm
        frontInput={frontInput}
        backInput={backInput}
        setFrontInput={setFrontInput}
        setBackInput={setBackInput}
        addCard={addCard}
      />

      <CardsTable
        deck={deck}
        toggleLearned={toggleLearned}
        editCard={editCard}
        deleteCard={deleteCard}
      />

      <StudyMode
        mode={mode}
        setMode={setMode}
        setCurrentIndex={setCurrentIndex}
        currentCard={currentCard}
        showFront={showFront}
        shuffleCards={shuffleCards}
        prevCard={prevCard}
        nextCard={nextCard}
        flipCard={flipCard}
      />
    </>
  )
}

export default App