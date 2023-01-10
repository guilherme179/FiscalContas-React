import { useEffect, useState } from "react";

type Cliente = {
    id: number,
    name: string
}

export const useClientes = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        fetch( 'http://localhost:3333/clients')
        .then( response => response.json())
        .then( data => {
            setClientes(data.clients);
        });
    }, []);

    return(
        clientes
    );

}