export function Home () {
    return(
        <div className="container mx-auto mt-12">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Saldo
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        R$ 1.200,00
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total de Saidas
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        32
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Total de Entradas
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        2
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Clientes
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        50
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Fornecedores
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        5
                    </div>
                </div>
                <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <div className="text-sm font-medium text-gray-500 truncate">
                        Estoque
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-gray-900">
                        187
                    </div>
                </div>
            </div>
        </div>
    );
}