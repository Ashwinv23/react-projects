import React, { useState } from "react";

const Tour = (props) => {
  const { id, name, info, image, price } = props.tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 170)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>

        <button className="delete-btn" onClick={()=> props.removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
