import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useClientes } from '../hooks/useClientes';

export function Deletar () {
    
    const [deletar, setDeletar] = useState(false);
    const clickAbrir = () => setDeletar(true);
    const clickFechar = () => setDeletar(false);

    const [apagar, setApagar] = useState('');
    let resposta: number;
    const clientes = useClientes();

    async function apagarCliente(event: FormEvent){
        event.preventDefault();

        const apagarInt = parseInt(apagar);
        const json = {id: apagarInt}
    
        try {
            await fetch('http://localhost:3333/clients', {
                    method: 'DELETE', 
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify(json)})  
                .then(response => {
                    resposta = response.status;
                    console.log( response.status );
                });
    
    
              if(resposta === 202){
                  alert('Cliente apagado com sucesso !');
    
                  setApagar('');
    
                  window.location.reload();
              }
        } catch (error) {
            alert('Falha ao tentar deletar o cliente, tente novamente!');
        }
    }

    return(
        <div>
            <span className="sm:ml-3">
                <button
                    type="button"
                    onClick={clickAbrir}
                    className=" inline-flex 
                                items-center 
                                rounded-md border 
                                border-transparent 
                                bg-red-600 
                                px-4 
                                py-2 
                                text-sm 
                                font-medium 
                                text-white 
                                shadow-sm 
                                hover:bg-red-700 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-indigo-500 
                                focus:ring-offset-2"
                >
                    <FontAwesomeIcon  
                        className="-ml-1 mr-2 h-5 w-5" 
                        aria-hidden="true" 
                        icon={faTrashCan}
                    />
                        Deletar
                </button>
            </span>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={deletar}
                onClose={clickFechar}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={deletar}>
                    <Box sx={{  position: 'absolute' as 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 500,
                                bgcolor: 'background.paper',
                                border: '1px solid rgb(92,94,96)',
                                borderRadius: '10px 10px 10px 10px',
                                boxShadow: 24,
                                p: 4
                            }}>
                        <div className='flex p-2 border-b-2 border-gray-500'>
                            <h5 className='text-xl font-medium'>Deletar Cliente</h5>
                        </div>
                        <div >
                            <form onSubmit={apagarCliente}>
                                <div className='lg:flex pt-12 pb-12 justify-center'>
                                    <label  className=' w-16' >Cliente</label>
                                    <select className='  ml-2 
                                                        w-[300px] 
                                                        border-2
                                                        rounded-[4px] 
                                                        text-center 
                                                        border-slate-300 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-red-700 '
                                            value={apagar}
                                            onChange={event => setApagar(event.target.value)}   
                                    >
                                        <option> Selecione o cliente </option>
                                        {clientes.map((cliente) => (
                                            <option key={cliente.id} value={cliente.id} >Código:{cliente.id} &nbsp;&nbsp;&nbsp; Nome: {cliente.name}</option>
                                        ))}
                                        
                                    </select>
                                </div>
                                
                                <div className='pt-2 border-t-2 border-gray-500 justify-end flex'>
                                    <button className=" inline-flex 
                                                        items-center 
                                                        rounded-md 
                                                        border 
                                                        border-transparent 
                                                        bg-red-600 
                                                        px-4 
                                                        py-2 
                                                        text-sm 
                                                        font-medium 
                                                        text-white 
                                                        shadow-sm 
                                                        hover:bg-red-700 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-red-700 
                                                        focus:ring-offset-2" 
                                            value="cadastrar"
                                    >
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}