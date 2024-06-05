import React from "react";
import axios from "axios";

/**
 * Handles the input confirmation for a city name. it calls `cityValidation` if the input is not empty and the `Enter` key is pressed.
 *
 * @param {React.KeyboardEvent<HTMLDivElement>} event - The keyboard event triggered by the input.
 * @param {string} name - The name of the city.
 * @return {void} This function does not return a value.
 *
 * @see {@link cityValidation}
 */
const cityNameInputConfirmation = (
  event: React.KeyboardEvent<HTMLDivElement>,
  name: string
) => {
  if (event.key === "Enter") {
    if (name.trim() != "") {
      cityValidation(name);
    }
  }
};

const cityValidation = async (name: string) => {
  const response = await axios.post(
    `http://localhost:${import.meta.env.VITE_SERVER_PORT}/post`,
    {
      cityName: name,
    }
  );
  console.log(response.data);
};

export { cityNameInputConfirmation };
