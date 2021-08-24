import React from "react";
import "./FormItem.css";

const FormItem = (props) => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input
          className="text-city"
          type="text"
          placeholder="city"
          name="city"
        />
        <input
          className="text-country"
          type="text"
          placeholder="country"
          name="country"
        />
        <input className="button" type="submit" value="Go" />
      </form>
    </div>
  );
};

export default FormItem;
