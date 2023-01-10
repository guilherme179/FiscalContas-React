import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useClientes } from '../hooks/useClientes';
import { useForm } from 'react-hook-form';
import { api } from '../lib/axios';

export function Editar () {
    
    const [editar, setEditar] = useState(false);
    const clickAbrir = () => setEditar(true);
    const clickFechar = () => setEditar(false);

    const [cliente, setCliente] = useState('');
    const [id, setId] = useState('');
    const [telefone, setTelefone] = useState('');
    const [preco, setPreco] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const precoBD = preco.replace(/\D/g, '');

    const [buscar, setBuscar] = useState('');
    const {register ,setValue} = useForm();

    const clientes = useClientes();

    async function checkCliente () {

        const buscarInt = parseInt(buscar);
        const json = {id: buscarInt}
        console.log(JSON.stringify(json));

        await fetch('http://localhost:3333/clients/byid', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(json)
        }) 
        .then(  res => res.json())
        .then(  data => { 
                console.log(data);
                setRua(data['clients'].street);
                setCep(data['clients'].cep);
                setId(data['clients'].id);
                setBairro(data['clients'].district);
                setCliente(data['clients'].name);
                setNumero(data['clients'].numberHouse);
                setTelefone(data['clients'].phone);
                setPreco(data['clients'].price);
        });
    }

    async function checkCEP (e: FormEvent) {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(  res => res.json())
        .then(  data => { console.log(data);
                setRua(data.logradouro);
                setBairro(data.bairro);
        });
    }

    async function editarCliente(event: FormEvent){
        event.preventDefault();
    
        try {
          const response = await api.put('/clients', {
            id: id,
            name: cliente,
            phone: telefone,
            price: preco,
            // preco: precoBD,
            cep: cep,
            street: rua,
            numberHouse: numero,
            district: bairro,
          });

          const resposta = response.status;
          console.log(resposta);

          if(resposta === 202){
              alert('Cliente atualizado com sucesso !');
        
              setCliente('');
              setTelefone('');
              setPreco('');
              setCep('');
              setRua('');
              setNumero('');
              setBairro('');

              window.location.reload();
          }
        
        } catch (err) {
          alert('Falha ao tentar atualizar o cliente, tente novamente!');
        }
    }

    return(
        <div>
            <span className="hidden sm:block">
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
                        icon={faPenToSquare}
                    />
                        Editar
                </button>
            </span>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={editar}
                onClose={clickFechar}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={editar}>
                    <Box sx={{  position: 'absolute' as 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 653,
                                bgcolor: 'background.paper',
                                border: '1px solid rgb(92,94,96)',
                                borderRadius: '10px 10px 10px 10px',
                                boxShadow: 24,
                                p: 4
                            }}>
                        <div className='flex p-2 border-b-2 border-gray-500'>
                            <h5 className='text-xl font-medium'>Editar Cliente</h5>
                        </div>
                        <div >
                            <form onSubmit={editarCliente}>
                                <div className='lg:flex p-2 justify-center'>
                                    <label  className=' w-16' >Cliente</label>
                                    <select className=' ml-2 
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
                                            onBlur={checkCliente}
                                    >
                                        <option> Selecione o cliente </option>
                                        {clientes.map((cliente) => (
                                            <option key={cliente.id} value={cliente.id} >Código:{cliente.id} &nbsp;&nbsp;&nbsp; Nome: {cliente.name}</option>
                                            ))}
                                        
                                    </select>
                                </div>
                                
                                <div className='lg:flex p-2'>
                                </div>

                                <div className='lg:flex p-2'>
                                    <label  className=' w-16' >Cliente</label>
                                    <input  className=' ml-2 
                                                        border-2 
                                                        rounded-[4px] 
                                                        text-center 
                                                        border-slate-300 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-600 ' 
                                            name="nome" 
                                            id="nome" 
                                            value={cliente}
                                            onChange={event => setCliente(event.target.value)}   
                                            placeholder="Nome do cliente.." 
                                    />
                                    
                                    <label  className=' w-16 ml-16'>Cep</label>
                                    <input  className=' ml-2 
                                                        border-2 
                                                        rounded-[4px] 
                                                        text-center 
                                                        border-slate-300 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-600 ' 
                                            name="cep" 
                                            id="cep" 
                                            onBlur={checkCEP}
                                            value={cep}
                                            onChange={event => setCep(event.target.value)}   
                                            placeholder="Cep do fornecedor.." 
                                    />
                                </div>

                                <div className='lg:flex p-2'>
                                </div>
                                                    
                                <div className='lg:flex p-2'>
                                    <label  className=' w-16 '>Telefone</label>
                                    <input  className=' ml-2 
                                                        border-2 
                                                        rounded-[4px] 
                                                        text-center 
                                                        border-slate-300 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-600 ' 
                                            name="telefone" 
                                            id="telefone" 
                                            value={telefone}
                                            onChange={event => setTelefone(event.target.value)}   
                                            placeholder="Telefone do cliente.."  
                                    />
                                    
                                    <label  className=' w-16 ml-16'>Rua</label>
                                    <input  className=' ml-2 
                                                        border-2
                                                        rounded-[4px] 
                                                        text-center 
                                                        border-slate-300 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-600 ' 
                                            name="rua" 
                                            disabled
                                            id="rua" 
                                            value={rua}
                                            onChange={event => setRua(event.target.value)}   
                                            placeholder="Rua do fornecedor.." 
                                    />
                                </div>

                                <div className='lg:flex p-2'>
                                </div>

                                <div className='lg:flex p-2'>
                                    <label  className=' w-16'>Preço</label>
                                    <input  className=' ml-2 
                                                        border-2 
                                                        rounded-[4px] 
                                                        text-center 
                                                        border-slate-300 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-600 ' 
                                            name="preco" 
                                            id="preco" 
                                            value={preco}
                                            onChange={event => setPreco(event.target.value)}   
                                            placeholder="Preço do cliente.." 
                                    />
                                    
                                    <label  className=' w-16 ml-16'>Número</label>
                                    <input  className=' ml-2 
                                                        border-2 rounded-[4px] 
                                                        text-center 
                                                        border-slate-300 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-600 ' 
                                            name="numeroIMO" 
                                            id="numeroIMO" 
                                            value={numero}
                                            onChange={event => setNumero(event.target.value)}   
                                            placeholder="Número do fornecedor.." 
                                    />
                                </div>

                                <div className='lg:flex p-2'>
                                </div>

                                <div className='lg:flex p-2 justify-end'>
                                    
                                    <label  className=' w-16'>Bairro</label>
                                    <input  className=' ml-2 
                                                        border-2 
                                                        rounded-[4px] 
                                                        text-center 
                                                        border-slate-300 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-600 ' 
                                            name="bairro" 
                                            disabled
                                            id="bairro" 
                                            value={bairro}
                                            onChange={event => setBairro(event.target.value)}   
                                            placeholder="Bairro do fornecedor.." 
                                    />
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
                                                        text-white shadow-sm 
                                                        hover:bg-indigo-700 
                                                        focus:outline-none 
                                                        focus:ring-2 
                                                        focus:ring-indigo-500 
                                                        focus:ring-offset-2" 
                                            value="cadastrar"
                                    >
                                        Salvar
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