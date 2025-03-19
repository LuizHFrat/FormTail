import { useState, useEffect } from "react";

export default function PaginaSecundaria() {
  const [dadosSalvos, setDadosSalvos] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("dadosFormulario"));
    setDadosSalvos(dados);
  }, [modalAberto]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Página Secundária</h1>
          <nav className="flex space-x-4">
            <a href="/" className="hover:underline">Início</a>
            <button onClick={() => setModalAberto(true)} className="hover:underline">
              Ver Dados Salvos
            </button>
          </nav>
        </div>
      </header>

      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-6 w-80 relative">
            <button onClick={() => setModalAberto(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Dados Salvos</h2>
            <div className="text-gray-700">
              {dadosSalvos ? (
                <>
                  <p><strong>Nome:</strong> {dadosSalvos.nome}</p>
                  <p><strong>Email:</strong> {dadosSalvos.email}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </>
              ) : (
                <p>Nenhum dado salvo.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto p-4">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded p-4">
              <img src="https://via.placeholder.com/300" alt="Foto 1" className="w-full" />
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </p>
            </div>
            <div className="bg-white shadow rounded p-4">
              <img src="https://via.placeholder.com/300" alt="Foto 2" className="w-full" />
              <p className="mt-2 text-gray-600">
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
