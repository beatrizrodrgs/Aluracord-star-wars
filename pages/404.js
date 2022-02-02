import { Box, Button } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json'

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag> {props.children} </Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neon["red"]};
                    font-size: 24px;
                    font-weight: 600;
                    text-shadow: 0px 0px 6px rgba(4, 197, 209, 0.8);
                }
            `}</style>
        </>
    );
}

export default function PaginaError404() {
    const roteamento = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundImage: 'url(https://4.bp.blogspot.com/-X5WSYfqNqNY/XD4zZPUJM8I/AAAAAAAAAno/vmp1H4vhLPYB5_lc6-K82AUjDdvVYHaPgCKgBGAs/w3840-h2400-c/kylo-ren-lightsaber-star-wars-16-4k.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.transparent["box1"],
                    }}
                >
                    <Box
                        as="form"
                        onSubmit={function (InfosDoEvento) {
                            InfosDoEvento.preventDefault();
                            roteamento.push('../')

                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '70%' }, textAlign: 'center', margin: '30px 0',
                        }}
                    >
                        <Titulo tag="h2">ERROR 404: not found</Titulo>

                        <Button
                            styleSheet={{
                                backgroundColor: '#000',
                                width: { sm: '50%' },
                                marginTop: '50px'
                            }}
                            type='submit'
                            label='Voltar'
                            fullWidth
                            buttonColors={{
                                contrastColor: '#fff',
                                mainColor: appConfig.theme.colors.neon["aqua"],
                            }}

                            variant='secondary'
                        />
                    </Box>

                </Box>
            </Box>
        </>
    );
}
