import { useForm } from "react-hook-form";

function AlarmAddForm(onIsAdded: any) {
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
    onIsAdded(true);

    alert(data.description + " added to Alarms");
  }

  return (
    <form
      className="mt-5 flex flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}>
      <input
        className="input input-bordered input-primary w-full max-w-xs"
        {...register("description")}
      />
      <input
        className="input input-bordered input-primary w-full max-w-xs text-center font-bold"
        {...register("time")}
        type="time"
      />
      <button
        className="btn btn-primary mt-2"
        type="submit"
        value="submit">
        Add Alarm
      </button>
    </form>
  );
}

export default AlarmAddForm;
