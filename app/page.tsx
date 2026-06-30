import Form from "next/form";
import {getMeals, saveMeal} from "@/app/server-actions/serverActions";


export default async function Home() {
 const mealsArray =  await  getMeals();
    return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Form action={saveMeal}>
        <input type="text" name={'title'}/>
        <button>send</button>

      </Form>
        <div className={'meals'}>
            {
                mealsArray.map(meal => (<div key={meal.id}>{meal.title}</div>))
            }
        </div>
    </div>
  );
}
