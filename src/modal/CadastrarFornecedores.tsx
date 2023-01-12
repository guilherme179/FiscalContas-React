import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { useState, FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../lib/axios';

export function Cadastrar () {
    
    const [cliente, setCliente] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const [cadastrar, setCadastrar] = useState(false);
    const clickAbrir = () => setCadastrar(true);
    const clickFechar = () => setCadastrar(false);
    const {register ,setValue} = useForm();

    async function cadastrarUsuario(event: FormEvent){
        event.preventDefault();
    
        try {
          const response = await api.post('/clients', {
            name: cliente,
            cnpj: cnpj,
            phone: telefone,
            email: email,
            cep: cep,
            street: rua,
            numberHouse: numero,
            district: bairro,
            city: cidade,
            state: estado,
          });

          const resposta = response.status;

          if(resposta === 201){
              alert('Fornecedor cadastrado com sucesso !');
        
              setCliente('');
              setCnpj('');
              setTelefone('');
              setEmail('');
              setPreco('');
              setCep('');
              setRua('');
              setNumero('');
              setBairro('');
              setCidade('');
              setEstado('');

              window.location.reload();
          }
        
        } catch (err) {
          alert('Falha ao tentar cadastrar fornecedor, tente novamente!');
        }
    }

    async function checkCEP (e: FormEvent) {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(  res => res.json())
        .then(  data => { console.log(data);
                setValue('rua', data.logradouro);
                setRua(data.logradouro);
                setValue('bairro', data.bairro);
                setBairro(data.bairro);
                setValue('cidade', data.localidade);
                setCidade(data.localidade);
                setValue('uf', data.uf);
                setEstado(data.uf);
        });
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
                    >
                    <FontAwesomeIcon  
                        className="-ml-1 mr-2 h-5 w-5" 
                        aria-hidden="true" 
                        icon={faSquarePlus}
                    />
                        Cadastrar
                </button>
            </span>

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={cadastrar}
            onClose={clickFechar}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={cadastrar}>
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
                        <h5 className='text-xl font-medium'>Cadastrar Fornecedor</h5>
                    </div>
                    <div >
                        <form onSubmit={cadastrarUsuario}>
                            <div className='lg:flex p-2'>
                                <label  className='w-16' >Fornecedor</label>
                                <input  required 
                                        onChange={event => setCliente(event.target.value)} 
                                        className=' ml-2 
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600 ' 
                                        name="nome" 
                                        id="nome" 
                                        placeholder="Nome do cliente.." 
                                        value={cliente}
                                />
                                
                                <label  className='w-16 ml-16'>Cep</label>
                                <input  required 
                                        onChange={event => setCep(event.target.value)} 
                                        className=' ml-2 
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
                                        placeholder="Cep do fornecedor.." 
                                        value={cep}
                                />
                            </div>

                            <div className='lg:flex p-2'>
                            </div>
                                                
                            <div className='lg:flex p-2'>
                                <label  className='w-16'>Cnpj</label>
                                <input  required 
                                        onChange={event => setCnpj(event.target.value)} 
                                        className=' ml-2 
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600 ' 
                                        name="cnpj" 
                                        id="cnpj" 
                                        placeholder="Cnpj do cliente.." 
                                        value={cnpj}
                                />
                                
                                <label  className='w-16 ml-16'>Rua</label>
                                <input  required 
                                        className=' ml-2 
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600 ' 
                                        {...register("rua")}
                                        id="rua" 
                                        disabled
                                        placeholder="Rua do fornecedor.." 
                                        value={rua}
                                />
                            </div>

                            <div className='lg:flex p-2'>
                            </div>

                            <div className='lg:flex p-2'>
                                <label  className='w-16 '>Telefone</label>
                                <input  required 
                                        onChange={event => setTelefone(event.target.value)} 
                                        className=' ml-2
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600 ' 
                                        name="telefone" 
                                        id="telefone" 
                                        placeholder="Telefone do cliente.."
                                        value={telefone}  
                                />

                                <label  className='w-16 ml-16'>Número</label>
                                <input  required 
                                        onChange={event => setNumero(event.target.value)} 
                                        className=' ml-2 
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600 ' 
                                        name="numeroIMO" 
                                        id="numeroIMO" 
                                        placeholder="Número do fornecedor.." 
                                        value={numero}
                                />
                            </div>

                            <div className='lg:flex p-2'>
                            </div>

                            <div className='lg:flex p-2'>
                                <label  className='w-16'>E-mail</label>
                                <input  required 
                                        onChange={event => setEmail(event.target.value)} 
                                        className=' ml-2 
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600' 
                                        name="email" 
                                        type="email"
                                        id="email" 
                                        placeholder="E-mail do cliente.." 
                                        value={email}
                                />
                                
                                <label  className='w-16 ml-16'>Bairro</label>
                                <input  required 
                                        className=' ml-2 
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600 ' 
                                        {...register("bairro")}
                                        id="bairro"
                                        disabled
                                        placeholder="Bairro do fornecedor.."
                                        value={bairro} 
                                />
                            </div>

                            <div className='lg:flex p-2'>
                            </div>
                            
                            <div className='lg:flex p-2'>
                                <label  className='w-16'>Preço</label>
                                <input  required 
                                        onChange={event => setPreco(event.target.value)} 
                                        className=' ml-2 
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600 ' 
                                        name="preco" 
                                        id="preco" 
                                        placeholder="Preço do cliente.." 
                                        value={preco} 
                                />

                                <label  className='w-16 ml-16'>Cidade</label>
                                <input  required  
                                        className=' ml-2 
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600 ' 
                                        {...register("cidade")}
                                        id="cidade" 
                                        disabled
                                        placeholder="Cidade do fornecedor.." 
                                        value={cidade} 
                                />
                            </div>
                            
                            <div className='lg:flex p-2'>
                            </div>
                            
                            <div className='lg:flex p-2 justify-end'>
                                <label  className='w-16 '>Estado</label>
                                <input  required 
                                        className=' ml-2 
                                                    border-2 
                                                    rounded-[4px] 
                                                    text-center 
                                                    border-slate-300 
                                                    focus:outline-none 
                                                    focus:ring-2 
                                                    focus:ring-indigo-600 ' 
                                        {...register("uf")}
                                        id="uf" 
                                        disabled
                                        placeholder="Estado do fornecedor.." 
                                        value={estado} 
                                />
                            </div>
                            
                            <div className='pt-2 border-t-2 border-gray-500 justify-end flex'>
                                <button type='submit'                                            
                                        className=" inline-flex 
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