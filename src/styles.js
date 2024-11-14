import styled from 'styled-components';

// Container principal que ocupa toda a altura e largura da tela
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA; // Cor de fundo do container

    display: flex;
    align-items: center;      // Centraliza o conteúdo verticalmente
    justify-content: center;   // Centraliza o conteúdo horizontalmente
`;

// Componente para a área de conteúdo principal da calculadora
export const Content = styled.div`
    background-color: #FFFFFF; // Cor de fundo branca para o conteúdo
    width: 50%;                // Define a largura como metade da tela
    padding: 20px;             // Adiciona um espaçamento interno
    border-radius: 8px;        // Adiciona bordas arredondadas
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra suave para efeito de profundidade
`;

// Linha para organizar os botões horizontalmente
export const Row = styled.div`
    display: flex;
    flex-direction: row;       // Exibe os itens em linha (horizontalmente)
    justify-content: space-between; // Espaça os itens uniformemente
    align-items: center;       // Alinha os itens ao centro verticalmente
    margin-bottom: 10px;       // Espaçamento entre as linhas de botões
`;

// Coluna para organizar os elementos verticalmente, se necessário
export const Column = styled.div`
    display: flex;
    flex-direction: column;    // Exibe os itens em coluna (verticalmente)
    justify-content: space-between; // Espaça os itens uniformemente
    align-items: center;       // Alinha os itens ao centro horizontalmente
    gap: 10px;                 // Espaçamento entre os itens na coluna
`;
