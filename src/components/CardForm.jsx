function CardForm({
  frontInput,
  backInput,
  setFrontInput,
  setBackInput,
  addCard
}) {
  return (
    <div className="box">
      <h2>Создать карточку</h2>

      <textarea
        placeholder="Лицевая сторона (вопрос или термин)"
        value={frontInput}
        onChange={(e) =>
          setFrontInput(e.target.value)
        }
      />

      <textarea
        placeholder="Оборотная сторона (ответ или определение)"
        value={backInput}
        onChange={(e) =>
          setBackInput(e.target.value)
        }
      />

      <button onClick={addCard}>
        Добавить карточку
      </button>
    </div>
  )
}

export default CardForm