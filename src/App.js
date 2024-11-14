import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  // Estado para armazenar o número atual a ser exibido no display
  const [currentNumber, setCurrentNumber] = useState('0');
  // Estado para armazenar o primeiro número de uma operação
  const [firstNumber, setFirstNumber] = useState('0');
  // Estado para armazenar a operação selecionada (+ ou -)
  const [operation, setOperation] = useState('');

  // Limpa todos os estados para redefinir a calculadora
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  // Adiciona o número pressionado ao número atual (concatenando)
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  };

  // Função para tratar a operação de soma
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      // Se é a primeira entrada, armazena o número atual e define a operação
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      // Se já existe um primeiro número, realiza a soma e exibe o resultado
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');  // Reseta o primeiro número
      setOperation('');
    }
  };

  // Função para tratar a operação de subtração
  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      // Se é a primeira entrada, armazena o número atual e define a operação
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      // Se já existe um primeiro número, realiza a subtração e exibe o resultado
      const difference = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(difference));
      setFirstNumber('0');  // Reseta o primeiro número
      setOperation('');
    }
  };

  // Função para realizar o cálculo com base na operação selecionada
  const handleEquals = () => {
    if (firstNumber !== '0' && operation && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        {/* Display da calculadora */}
        <Input value={currentNumber} />
        
        {/* Linha de botões de operação */}
        <Row>
          <Button label="x" />
          <Button label="/" />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." />
        </Row>
        
        {/* Linha de botões numéricos e operação de subtração */}
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        
        {/* Linha de botões numéricos e operação de soma */}
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        
        {/* Linha de botões numéricos e botão de igualdade */}
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
