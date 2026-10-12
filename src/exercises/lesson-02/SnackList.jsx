function SnackList() {
  const mySnacks = [
    { id: 1, name: 'Barbeque chips', rank: 1 },
    { id: 2, name: 'Fruit', rank: 2 },
    { id: 3, name: 'Shortbread cookies', rank: 3 },
    { id: 4, name: 'Sunflower seeds', rank: 4 },
  ];

  const sortedRanks = [...mySnacks].toSorted((a, b) => a.rank - b.rank);

  return (
    <>
      <ol>
        {sortedRanks.map((snack) => (
          <li key={snack.id}>{snack.name}</li>
        ))}
      </ol>
    </>
  );
}

export default SnackList;
