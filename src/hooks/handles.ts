import React from "react";
import axios from "axios";
import { City } from "../types/City";
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
): void => {
  if (event.key === "Enter") {
    if (name.trim() != "") {
      cityValidation(name);
    }
  }
};

/**
 * Validates a city name by making a POST request to the weather app server.
 *
 * @param {string} name - The name of the city to be validated.
 * @return {Promise<void>} - A promise that resolves when the validation is complete.
 *
 * @see {@link https://github.com/Lipcimn/weather-app-server}
 */
const cityValidation = async (name: string): Promise<City[]> => {
  const response = await axios.post(
    `http://localhost:${import.meta.env.VITE_SERVER_PORT}/post`,
    {
      cityName: name,
    }
  );
  return response.data;
};

export { cityNameInputConfirmation, cityValidation };
