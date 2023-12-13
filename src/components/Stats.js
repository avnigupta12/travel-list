export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const perPacked = (packed * 100) / total;
  return (
    <footer className="stats">
      <em>
        {perPacked === 100
          ? "You got everything! Ready to go ✈️✈️"
          : `You have ${total} items in total, and you have already packed ${packed} (
            ${perPacked}%`}
      </em>
    </footer>
  );
}
