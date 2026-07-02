"use client";

import {useForm} from "react-hook-form";
import {createCar} from "@/app/services/api.service";

type FormData = {
    brand: string;
    price: number;
    year: number;
}

const CarForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<FormData>();


    const submit = async (data: FormData) => {

        await createCar(data);

        alert("Car created!");

        reset();

    }

    return (

        <form onSubmit={handleSubmit(submit)}>

            <div>

                <input placeholder="Brand" {...register("brand", {required: "Brand is required"})}/>

                <p>{errors.brand?.message}</p>

            </div>

            <div>

                <input
                    type="number"
                    placeholder="Price"
                    {...register("price", {
                        required: "Price is required",
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
                        required: "Year is required",
                        valueAsNumber: true
                    })}
                />

                <p>{errors.year?.message}</p>

            </div>

            <button>Create</button>

        </form>

    );
};

export default CarForm;