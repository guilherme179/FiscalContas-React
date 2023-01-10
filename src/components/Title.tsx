import {Cadastrar} from '../modal/Cadastrar'
import { Deletar } from '../modal/Deletar';
import { Editar } from '../modal/Editar';
import { Buscar } from '../modal/Buscar';


export function Title() {

    return(
        <div className="lg:flex p-8 border-2 rounded-md bg-gradient-to-t from-navbar-400 to-navbar-700 ">
            <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                    Clientes
                </h2>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4 justify-self-end">
                <Editar />

                <Buscar />

                <Deletar />

                <Cadastrar />
            </div>
        </div>
    );
}