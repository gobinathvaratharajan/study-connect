export default function sidebar() {
  return (
    <div>
      <div className="pt-2">
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Create Event
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              View Charts
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
