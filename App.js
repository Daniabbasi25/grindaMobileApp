import {StatusBar, View} from 'react-native';
import {Colors} from './assets/theme';
import AppRout from './src/navigation/AppRout';

function App() {
  return (
    <View style={{flex: 1}}>
      <AppRout />
    </View>
  );
}
export default App;
