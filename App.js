import React from 'react';
import { SafeAreaView } from 'react-native';

/*import { StatusBar } from 'expo-status-bar';*/
import styles from './src/components/estilo'
import MegaSena from './src/components/megaSena/MegaSena';


/*import Aleatorio from './src/components/Aleatorio';
import ListaProdutos from './src/components/produtos/ListaProdutos';
import DigiteSeuNome from './src/components/DigiteSeuNome';
import Quadrado from './src/components/Layout/Quadrado';
import FlexBoxV1 from './src/components/Layout/FlexBoxV1';
import MinMax from './src/components/MinMax';
import Primeiro from './src/components/Primeiro';
import Titulo from './src/components/Titulo';
import ButtonWrapped from './src/components/ButtonWrapped';
import Pai from './src/components/comuDireta/Pai';
import Pai2 from './src/components/comuIndireta/Pai';
import ContadorV2 from './src/components/contador/ContadorV2';
import Diferent from './src/components/DiferencaIOSAND/Diferent';
import Conditional from './src/components/Conditional';
import UsuarioLogado from './src/components/renderizacaoCondicional/UsuarioLogado';*/

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MegaSena numberAmount={15}/>
      {/*<Titulo principal="Meu Aplicativo" segundario="app doido" />
      <FlexBoxV1 />
      <DigiteSeuNome />
      <ListaProdutos />
      <Aleatorio min={10} max={100} />
      <Pai />
      <Pai2 />
      <UsuarioLogado usuario={{ nome: 'Carlos', email: 'carlos@carlos.com.br' }}/>
      <UsuarioLogado />
      <UsuarioLogado usuario={{ nome: 'Carlos' }}/>
      <Conditional />
      <ContadorV2 />
      <Diferent />
      <MinMax x={4} y={5} />
      <Primeiro />
      <ButtonWrapped startNumber={100} step={10}/>*/}
      {/*<StatusBar style="auto" />*/}
    </SafeAreaView>
  );
}

export default App;

