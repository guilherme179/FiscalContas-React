import { Box, Modal } from "@mui/material";

export function Visualizar( ){

    const ola = console.log("ola");
    return(
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            BackdropProps={{
            timeout: 500,
            }}
        >
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
            </Box>
        </Modal>
    );
}