const ShowIngredient = ({ filterMeals }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ingredients</th>
          <th>Measure</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(filterMeals).map((key) => {
          return key.includes("Ingredient") && filterMeals[key] ? (
            <tr>
              <td>{filterMeals[key]}</td>
              <td>{filterMeals[`strMeasure${key.slice(13)}`]}</td>
            </tr>
          ) : (
            ""
          );
        })}
      </tbody>
    </table>
  );
};

export default ShowIngredient;
