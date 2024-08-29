import { SetStateAction } from "react";
import { useForm } from "react-hook-form";

function AlarmAddForm({
  onIsAdded,
}: {
  onIsAdded: (value: SetStateAction<boolean>) => void;
}) {
  const { register, handleSubmit, reset } = useForm();

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

    reset();
  }

  return (
    <form
      className="mt-5 flex flex-col items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}>
      <input
        required
        className="input input-bordered input-primary w-full max-w-xs"
        {...register("description")}
      />
      <input
        required
        className="input input-bordered input-primary w-full max-w-xs text-center font-bold"
        {...register("time")}
        type="time"
        step="1"
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
