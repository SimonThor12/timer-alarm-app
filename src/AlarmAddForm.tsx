import { useForm } from "react-hook-form";

function AlarmAddForm() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: any) {
    const url = "http://localhost:5066/Alarms";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert(data.description + " added to Alarms");
  }

  return (
    <form
      className="mt-5 flex flex-col items-center justify-center text-white space-y-5"
      onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="description">Description</label>
      <input
        {...register("description")}
        placeholder="description"
      />
      <input
        {...register("time")}
        type="time"
      />
      <button
        type="submit"
        value="submit">
        Add Alarm
      </button>
    </form>
  );
}

export default AlarmAddForm;
