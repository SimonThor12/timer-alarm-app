function AlarmAddForm() {
  return (
    <>
      <h1 className="text-5xl font-bold">Add your alarm here</h1>

      <form>
        <input
          type="text"
          placeholder="Description"
        />
        <input
          className=""
          type="time"
        />
        <button type="submit">Add Alarm</button>
      </form>
    </>
  );
}

export default AlarmAddForm;
