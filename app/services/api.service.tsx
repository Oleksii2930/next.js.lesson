
import { ICar } from "@/app/models/ICar";

const BASE_URL = "http://bigbird.space/carsAPI/v1";

export const getAllCars = async (): Promise<ICar[]> => {
  const res = await fetch(`${BASE_URL}/cars`);

  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  return res.json();
};

export const createCar = async (car: Omit<ICar, "id">) => {
  const res = await fetch(`${BASE_URL}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });


  const text = await res.text();

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${text}`);
  }

  return JSON.parse(text);
};