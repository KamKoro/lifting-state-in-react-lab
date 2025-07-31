// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from '../Ingredient/Ingredient.jsx';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => removeFromBurger(index)}
            buttonLabel="X"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
