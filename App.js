import { View } from 'react-native';
import Header from './src/Componentes/Header';
import Banner from './src/Componentes/Banner';
import CardMovie from './src/Componentes/CardMovie';
import Text from './src/Componentes/Text';

export default function App() {
  return (
    <View>
      <Header/>
      <Banner/>
      <Text/>
      <CardMovie/>
    </View>
  );
}


