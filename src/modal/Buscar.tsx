import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useClientes } from '../hooks/useClientes';
import { Visualizar } from './Visualizar';



export function Buscar () {
    
    const [visualizar, setVisualizar] = useState(false);
    const clickAbrir = () => setVisualizar(true);
    const clickFechar = () => setVisualizar(false);

    const [buscar, setBuscar] = useState('');

    const clientes = useClientes();

    async function buscarCliente(event: FormEvent){
        event.preventDefault();
        {clickFechar}
    }

    return(
        <div>
            <span className="ml-3 hidden sm:block">
                <button
                    type="button"
                    onClick={clickAbrir}
                    className=" inline-flex 
                                items-center 
                                rounded-md border 
                                border-gray-300 
                                bg-white 
                                px-4 
                                py-2 
                                text-sm 
                                font-medium 
                                text-gray-700 
                                shadow-sm 
                                hover:bg-gray-200 
                                focus:outline-none 
                                focus:ring-2
                                focus:ring-indigo-500 
                                focus:ring-offset-2"
                >
                    <FontAwesomeIcon  
                        className="-ml-1 mr-2 h-5 w-5 text-gray-500" 
                        aria-hidden="true" 
                        icon={faEye}
                    />
                        Visualizar
                </button>
            </span>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={visualizar}
                onClose={clickFechar}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={visualizar}>
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
                            <h5 className='text-xl font-medium'>Visualizar Cliente</h5>
                        </div>
                        <div >
                            <form onSubmit={buscarCliente}>
                                <div className='lg:flex pt-12 pb-12 justify-center'>
                                    <label  className='w-16' >Cliente</label>
                                    <select className='  ml-2 
                                                        w-[300px] 
                                                        border-2
                                                        rounded-[4px] 
                                                        text-center 
                                                        border-slate-300 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-600 '
                                            value={buscar}
                                            onChange={event => setBuscar(event.target.value)}   
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
                                                        bg-indigo-600 
                                                        px-4 
                                                        py-2 
                                                        text-sm 
                                                        font-medium 
                                                        text-white 
                                                        shadow-sm 
                                                        hover:bg-indigo-700 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-500 
                                                        focus:ring-offset-2" 
                                            value="visualizar"
                                    >
                                        Buscar
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