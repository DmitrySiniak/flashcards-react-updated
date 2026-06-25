function CardsTable({
  deck,
  toggleLearned,
  editCard,
  deleteCard
}) {
  return (
    <div className="box">
      <h2>Все карточки</h2>

      <table>
        <thead>
          <tr>
            <th>Лицевая сторона</th>
            <th>Оборотная сторона</th>
            <th>Выучена</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {deck.map((card) => (
            <tr key={card.id}>
              <td>{card.front}</td>
              <td>{card.back}</td>

              <td>
                <input
                  type="checkbox"
                  checked={card.learned}
                  onChange={() =>
                    toggleLearned(card.id)
                  }
                />
              </td>

              <td>
                <button
                  className="small-btn"
                  onClick={() =>
                    editCard(card.id)
                  }
                >
                  Редактировать
                </button>

                <button
                  className="small-btn"
                  onClick={() =>
                    deleteCard(card.id)
                  }
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CardsTable