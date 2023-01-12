import { useEffect, useState } from 'react';
import { Title } from '../components/Title';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { DataGrid, gridPageCountSelector, gridPageSelector, ptBR, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';

type Fornecedor = {
    id: number,
    nome: string,
    cnpj: string,
    telefone: string,
    desde: string,
}

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

export function Fornecedores() {
    
    const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);

    useEffect(() => {
        fetch( 'http://localhost:3333/providers')
        .then( response => response.json())
        .then( data => {
            setFornecedores(data.providers);
        });
    }, []);

    const [colunas, setColunas] = useState([
        {field: 'id', 
            headerName: 'Código',
            filter: true, 
            width: 263, 
            cellClassName: 'super-app-theme--cell',
            headerAlign: 'center',
            align: 'center', 
            headerClassName: 'super-app-theme--header'
        },
        {field: 'name', 
            headerName: 'Nome',
            filter: true, 
            width: 263, 
            cellClassName: 'super-app-theme--cell',
            headerAlign: 'center',
            align: 'center', 
            headerClassName: 'super-app-theme--header'
        },
        {field: 'cnpj', 
            headerName: 'Cnpj',
            filter: true, 
            width: 263, 
            cellClassName: 'super-app-theme--cell',
            headerAlign: 'center',
            align: 'center',
            headerClassName: 'super-app-theme--header'
        },
        {field: 'phone',
            headerName: 'Telefone',
            filter: true,
            width: 263,
            cellClassName: 'super-app-theme--cell',
            headerAlign: 'center',
            align: 'center',
            headerClassName: 'super-app-theme--header'
        },
      ]);

    return (
        <div className='p-5 w-full'>
            <Title nome="Fornecedores"/>
            <div className='p-4 w-full h-[79%]'>
            <Box 
                sx={{ 
                        '& .super-app-theme--header': {backgroundColor: '#5fa1fe', 
                            color: '#fff', 
                            fontSize: '18px'
                        }, 
                        '& .super-app-theme--cell': {
                            fontSize: '16px'
                        }, 
                        height: '100%',     
                        width: '100%'
                    }} 
            > 
                <DataGrid 
                    localeText={ptBR.components.MuiDataGrid.defaultProps.localeText} 
                    rows={fornecedores} 
                    columns={colunas} 
                    pageSize={5}     
                    pagination    
                    components={{ Pagination: CustomPagination,}} 
                    />
            </Box>
            </div>
        </div>
    );
}
