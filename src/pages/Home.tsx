export function Home () {
    return(
        <div className="container mx-auto mt-12">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <div className="w-3/3 mx-2 px-4 py-5 bg-navbar-400 rounded-lg shadow">
                    <div className="text-sm font-medium text-stone-300 truncate">
                        Saldo
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-white">
                        R$ 1.200,00
                    </div>
                </div>
                <div className="w-3/3 mx-2 px-4 py-5 bg-navbar-400 rounded-lg shadow">
                    <div className="text-sm font-medium text-stone-300 truncate">
                        Total de Saidas
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-white">
                        32
                    </div>
                </div>
                <div className="w-3/3 mx-2 px-4 py-5 bg-navbar-400 rounded-lg shadow">
                    <div className="text-sm font-medium text-stone-300 truncate">
                        Total de Entradas
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-white">
                        2
                    </div>
                </div>
                <div className="w-3/3 mx-2 px-4 py-5 bg-navbar-400 rounded-lg shadow">
                    <div className="text-sm font-medium text-stone-300 truncate">
                        Clientes
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-white">
                        50
                    </div>
                </div>
                <div className="w-3/3 mx-2 px-4 py-5 bg-navbar-400 rounded-lg shadow">
                    <div className="text-sm font-medium text-stone-300 truncate">
                        Fornecedores
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-white">
                        5
                    </div>
                </div>
                <div className="w-3/3 mx-2 px-4 py-5 bg-navbar-400 rounded-lg shadow">
                    <div className="text-sm font-medium text-stone-300 truncate">
                        Estoque
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-white">
                        187
                    </div>
                </div>
            </div>
        </div>
    );
}