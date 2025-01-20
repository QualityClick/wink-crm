import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <img
        src="/img/broken-link.png"
        alt="Broken Link"
        className="w-64 h-64 object-contain mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">Página no encontrada</h1>
      <p className="text-lg mb-6 text-gray-600">
        Oops! La página que buscas no existe.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
