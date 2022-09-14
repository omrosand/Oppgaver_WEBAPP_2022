export default function Food({ foodList }: any) {
  return (
    <ul>
      <ul>
        {foodList.map((meal: any) => (
          <li key={meal}>{meal}</li>
        ))}
      </ul>
    </ul>
  );
}
