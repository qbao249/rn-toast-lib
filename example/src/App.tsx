import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { multiply, show } from 'react-native-toast-lib';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(2, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TouchableOpacity
        onPress={async () => {
          await show('HELLO TOAST');
        }}
      >
        <Text>Show Toast</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
