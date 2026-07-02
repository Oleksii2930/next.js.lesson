import {ICar} from "@/app/models/ICar";


export const getAllCars = async ():Promise<ICar[]> => {
  const cars =  await fetch('https://bigbird.space/carsAPI/v1')
      .then(value => value.json());
return cars;

}