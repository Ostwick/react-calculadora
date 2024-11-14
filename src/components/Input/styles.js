import styled from 'styled-components';

// Container principal do input, que ocupa toda a largura e uma altura específica
export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;  // Cor de fundo azul claro para o container

    display: flex;
    align-items: center;       // Centraliza verticalmente o conteúdo do input
    justify-content: flex-end; // Alinha o texto do input à direita

    font-size: 24px;           // Tamanho de fonte do texto exibido
    font-family: 'Roboto', sans-serif; // Fonte Roboto para um estilo moderno

    // Estilização específica do elemento <input> dentro do InputContainer
    input {
        width: 100%;
        height: 100%;            // Ocupa toda a altura do container
        background-color: inherit; // Usa a mesma cor de fundo do container
        border: none;            // Remove a borda padrão do input
        display: flex;
        flex-direction: column;
        align-items: flex-end;   // Alinha o texto à direita
        padding: 0 10px;         // Espaçamento à esquerda e direita
        font-size: inherit;      // Usa o mesmo tamanho de fonte do container
        font-family: inherit;    // Usa a mesma fonte do container
        color: #FFFFFF;          // Cor branca para o texto do input
    }
`;
