import placeholderImg from '../assets/random-face-2.png'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <nav className="bg-white shadow-md rounded-lg flex items-center justify-between px-6 py-4">
        <ul className="flex space-x-8 text-gray-700 font-semibold">
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center space-x-3">
          <img
            src={placeholderImg}
            alt="user avatar"
            className="rounded-full w-14 h-14 object-cover cursor-pointer"
          />
          <p className="text-gray-800 text-sm font-medium">your email</p>
        </div>
      </nav>

      <button className="fixed bottom-6 right-6 bg-red-500 text-white font-semibold px-4 py-2 rounded-2xl shadow-md cursor-pointer hover:bg-red-600 transition">
        Sign out
      </button>
    </div>
  );
}

export default Home;
