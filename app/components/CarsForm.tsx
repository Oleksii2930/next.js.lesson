"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { createCar } from "@/app/services/api.service";
import { carSchema, CarFormData } from "@/app/lib/car.schema";

const CarForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<CarFormData>({
        resolver: joiResolver(carSchema),
    });

    const submit = async (data: CarFormData) => {

        await createCar(data);

        alert("Car created!");

        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>

            <div>
                <input
                    placeholder="Brand"
                    {...register("brand")}
                />

                <p>{errors.brand?.message}</p>
            </div>

            <div>
                <input
                    type="number"
                    placeholder="Price"
                    {...register("price", {
                        valueAsNumber: true
                    })}
                />

                <p>{errors.price?.message}</p>
            </div>

            <div>
                <input
                    type="number"
                    placeholder="Year"
                    {...register("year", {
                        valueAsNumber: true
                    })}
                />

                <p>{errors.year?.message}</p>
            </div>

            <button type="submit">
                Create
            </button>

        </form>
    );
};

export default CarForm;