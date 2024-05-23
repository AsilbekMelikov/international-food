import { Link } from "react-router-dom";

const MealsListItem = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  let classNames = "card-content";

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className={classNames}>
        <span className="card-title activator">
          <b>{strCategory}</b>
          <i className="material-icons right">more_vert</i>
        </span>
        <p>{strCategoryDescription}</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          Watch category
        </Link>
      </div>
    </div>
  );
};

export default MealsListItem;
