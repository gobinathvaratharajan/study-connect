export default function navbar() {
  return (
    <header className="p-3 w-full fixed top-0 z-50 bg-gradient-to-b from-white to-gray-100 shadow-md">
      <div className="flex items-center px-10 mx-auto gap-6">
        <a className="flex gap-6 items-center">
          <h3 className="text-2xl font-semibold text-black uppercase">
            StudyConnect
          </h3>
        </a>
        <div className="flex gap-3 ml-auto">
          <button className="btn">Login</button>
          <button className="btn">Register</button>
        </div>
      </div>
    </header>
  );
}
