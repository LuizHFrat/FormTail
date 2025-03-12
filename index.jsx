import { useState, useEffect } from "react";

export default function App() {
  const [dados, setDados] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem("dadosFormulario"));
    if (dadosSalvos) setDados(dadosSalvos);
  }, []);

  const salvarFormulario = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const email = e.target.email.value;
    const novosDados = { nome, email };
    localStorage.setItem("dadosFormulario", JSON.stringify(novosDados));
    setDados(novosDados);
    alert("Dados salvos!");
  };

  const modificarFormulario = () => {
    if (dados) {
      document.getElementById("nome").value = dados.nome;
      document.getElementById("email").value = dados.email;
      alert("Dados carregados para modificação!");
    } else {
      alert("Nenhum dado salvo encontrado.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Meu Site</h1>
          <nav>
            <button
              onClick={() => setModalAberto(true)}
              className="hover:underline"
            >
              Ver Dados Salvos
            </button>
          </nav>
        </div>
      </header>

      {modalAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-6 w-80 relative">
            <button
              onClick={() => setModalAberto(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Dados Salvos</h2>
            <div className="text-gray-700">
              {dados ? (
                <>
                  <p><strong>Nome:</strong> {dados.nome}</p>
                  <p><strong>Email:</strong> {dados.email}</p>
                </>
              ) : (
                <p>Nenhum dado salvo.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Busca</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="flex-grow p-2 border border-gray-300 rounded-l"
              onChange={(e) => setBusca(e.target.value.toLowerCase())}
            />
            <button className="bg-blue-600 text-white px-4 rounded-r">Buscar</button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Fotos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-white shadow p-4">
                <img src={`https://via.placeholder.com/150`} alt={`Foto ${num}`} className="w-full" />
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Formulário</h2>
          <form onSubmit={salvarFormulario} className="bg-white p-4 shadow rounded">
            <div className="mb-4">
              <label className="block text-gray-700">Nome</label>
              <input type="text" id="nome" name="nome" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="flex space-x-2">
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Salvar</button>
              <button type="button" onClick={modificarFormulario} className="bg-yellow-600 text-white px-4 py-2 rounded">Modificar</button>
            </div>
          </form>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Conteúdo</h2>
          <p className={busca && !"Lorem ipsum dolor sit amet".toLowerCase().includes(busca) ? "hidden" : ""}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </main>
    </div>
  );
}
