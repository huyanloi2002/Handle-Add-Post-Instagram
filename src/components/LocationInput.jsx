import React, { useEffect, useState } from "react";
import { Country } from "country-state-city";
import { setPost } from "../store/action";

const LocationInput = ({ onChange, value }) => {
  const [state, dispatch] = value;
  const countries = Country.getAllCountries();
  const [lengthValue, setLengthValue] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const { post } = state;

  useEffect(() => {
    if (post.location.name) {
      const lengthName = post.location.name.length;

      setLengthValue(lengthName);
    }
  }, [post.location.name]);

  useEffect(() => {
    if (post.location.name) {
      const country = countries.filter(
        (el) => el.name.substring(0, lengthValue) === post.location.name
      );
      setSelectedCountry(country);
    }
  }, [post.location.name, countries, lengthValue]);

  const handleSetLocation = (country) => {
    dispatch(
      setPost({
        ...post,
        location: {
          name: country.name,
          loc: [country.latitude, country.longitude],
        },
      })
    );
  };

  return (
    <React.Fragment>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        onChange={(e) => onChange(e)}
        value={post.location.name}
        rows={5}
        placeholder="Add ocation"
      />
      {post.location.name && !post.location.loc && (
        <ul>
          {selectedCountry.map((country, index) => (
            <li
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => handleSetLocation(country)}
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default LocationInput;
