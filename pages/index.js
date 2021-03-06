import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json'



function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag> {props.children} </Tag>
      <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neon["aqua"]};
                    font-size: 24px;
                    font-weight: 600;
                    text-shadow: 0px 0px 6px rgba(4, 197, 209, 0.8);
                }
            `}</style>
    </>
  );
}

// function HomePage() {
//     return (
//         <div>
//             <GlobalStyle/>
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }

// export default HomePage

export default function PaginaInicial() {
  // const username = 'beatrizrodrgs';
  const [githubAccount, setGithubAccount] = React.useState('');
  const [username, setUsername] = React.useState('beatrizrodrgs');
  const roteamento = useRouter();


  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((resposta) => {
        if (!resposta.ok) {
          throw Error('Não conseguiu fazer a requisição')
        }
        return resposta.json()
      })
      .then((resultado) => {
        setGithubAccount(resultado)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [username])

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          // backgroundColor: appConfig.theme.colors.neon["aqua"],
          backgroundImage: 'url(https://4.bp.blogspot.com/-X5WSYfqNqNY/XD4zZPUJM8I/AAAAAAAAAno/vmp1H4vhLPYB5_lc6-K82AUjDdvVYHaPgCKgBGAs/w3840-h2400-c/kylo-ren-lightsaber-star-wars-16-4k.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
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
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (InfosDoEvento) {
              InfosDoEvento.preventDefault();
              roteamento.push(`/chat?username=${username}`);
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Imersão React - Alura!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              value={username}
              onChange={function handler(event) {
                const valor = event.target.value;
                setUsername(valor);
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neon["red"],
                  mainColorHighlight: appConfig.theme.colors.neon["red"],
                  backgroundColor: 'black',
                },
              }}
            />

            {/* <input 
                            type="text"
                            value={username}
                            onChange={function handler(event){
                                const valor = event.target.value;
                                setUsername(valor);
                            }}  
                        
                        /> */}
            <Button
              styleSheet={{
                backgroundColor: '#d30a0a'
              }}
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: '#fff',
                mainColor: appConfig.theme.colors.neon["300"],
              }}

              variant='secondary'

            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[900],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neon["red"],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',

              }}

              src={username.length > 2 ? `https://github.com/${username}.png` : `https://github.com/user.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals["200"],
                backgroundColor: appConfig.theme.colors.neutrals["999"],
                padding: '3px 10px',
                borderRadius: '1000px',
              }}
            >
              {username.length > 2 ? githubAccount.name : "Invalid"}
              {githubAccount.name == null ? username : ""}
            </Text>
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals["200"],
                padding: '3px 10px',
                borderRadius: '1000px',
                marginTop: '8px'
              }}
            >
              {username.length > 2 ? githubAccount.location : ""}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}