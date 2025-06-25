type Props = {
  setFormOpen?: (open: boolean) => void;
};

export default function EventForm({ setFormOpen }: Props) {
  return (
    <div className="card bg-base-100 p-4 flex flex-col gap-3 shadow-sm w-full">
      <h3 className="text-2xl text-center font-semibold">Create a new event</h3>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Event title"
          className="input input-md w-full"
        />
        <input
          type="text"
          placeholder="Category"
          className="input input-md w-full"
        />
        <textarea
          className="textarea textarea-lg w-full"
          placeholder="Description"
        />
        <input
          type="text"
          placeholder="Date"
          className="input input-md w-full"
        />
        <input
          type="text"
          placeholder="City"
          className="input input-md w-full"
        />
        <input
          type="text"
          placeholder="Venue"
          className="input input-md w-full"
        />
        <div className="flex justify-end w-full gap-2 mt-4">
          <button onClick={() => setFormOpen(false)} className="btn">
            Cancel
          </button>
          <button className="btn btn-neutral text-white">Submit</button>
        </div>
      </form>
    </div>
  );
}
