import styled from 'styled-components';

// Estilização para o botão da calculadora
export const ButtonContainer = styled.button`
    padding: 20px;               // Espaçamento interno para aumentar a área de clique
    border: 1px solid #CDCDCD;    // Borda sutil para definir o contorno do botão
    background-color: #00AAF0;    // Cor de fundo azul para o botão
    color: #FFFFFF;               // Cor do texto em branco
    font-size: 24px;              // Tamanho da fonte do texto do botão
    font-weight: 700;             // Texto em negrito para maior visibilidade
    flex: 1;                      // Permite que o botão expanda para preencher a área disponível

    // Efeito de hover para indicar interatividade ao usuário
    &:hover {
        opacity: 0.8;             // Reduz ligeiramente a opacidade ao passar o mouse
        cursor: pointer;          // Muda o cursor para pointer, indicando que é clicável
    }

    // Efeito de foco para acessibilidade, melhora a visibilidade do botão focado
    &:focus {
        outline: 2px solid #FFFFFF;  // Adiciona uma borda branca ao botão quando está focado
    }

    // Efeito de transição para suavizar o efeito hover
    transition: opacity 0.2s ease;
`;
