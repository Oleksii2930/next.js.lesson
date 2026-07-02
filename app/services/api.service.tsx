import { ICar } from "@/app/models/ICar";

const BASE_URL = "http://bigbird.space/carsAPI/v1";

export const getAllCars = async (): Promise<ICar[]> => {
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }

  return response.json();
};