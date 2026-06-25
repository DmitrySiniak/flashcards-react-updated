function StudyMode({
  mode,
  setMode,
  setCurrentIndex,
  currentCard,
  showFront,
  shuffleCards,
  prevCard,
  nextCard,
  flipCard
}) {
  return (
    <div className="box">
      <h2>Режим изучения</h2>

      <select
        value={mode}
        onChange={(e) => {
          setMode(e.target.value)
          setCurrentIndex(0)
        }}
      >
        <option value="all">
          Все карточки
        </option>

        <option value="unlearned">
          Только невыученные
        </option>
      </select>

      <button onClick={shuffleCards}>
        Перемешать
      </button>

      <div className="study-card">
        {currentCard
          ? showFront
            ? currentCard.front
            : currentCard.back
          : "Нет карточек"}
      </div>

      <div className="controls">
        <button onClick={prevCard}>
          Назад
        </button>

        <button onClick={flipCard}>
          Перевернуть
        </button>

        <button onClick={nextCard}>
          Вперёд
        </button>
      </div>
    </div>
  )
}

export default StudyMode