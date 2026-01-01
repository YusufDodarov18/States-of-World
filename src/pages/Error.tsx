
const Error = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-800">
          Саҳифа ёфт нашуд
        </p>
        <p className="mt-2 text-gray-500">
          Лутфан санҷед, ки суроға дуруст аст
        </p>

        <button
          onClick={() => window.history.back()}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
        >
          ⬅️ Бозгашт
        </button>
      </div>
    </div>
  )
}

export default Error
