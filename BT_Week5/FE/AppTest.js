import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleView from './View/SimpleView';
import ListDevices from './View/ListDevices';

export default function App() {
  return (
    // <SimpleView />
    <ListDevices/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
