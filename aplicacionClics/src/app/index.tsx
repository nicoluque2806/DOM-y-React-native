
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [contador, setContador] = useState(0);
  const [historial, setHistorial] = useState<
    { numero: number; hora: string }[]
  >([]);

  function darLike() {
    const nuevoContador = contador + 1;
    const hora = new Date().toLocaleTimeString('es-CO', {
      hour12: false,
    });

    setContador(nuevoContador);
    setHistorial([
      { numero: nuevoContador, hora },
      ...historial,
    ]);
  }

  function restarLike() {
    if (contador > 0) {
      setContador(contador - 1);
      setHistorial(historial.slice(1));
    }
  }

  function reiniciar() {
    setContador(0);
    setHistorial([]);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          Interactividad con React Native
        </Text>

        <Text style={styles.subtitulo}>
          ¡Haz clic y registra tus Likes!
        </Text>

        <Text style={[
          styles.contador,
          contador > 10 && styles.superado
        ]}>
          {contador}
        </Text>

        <TouchableOpacity
          style={styles.botonLike}
          onPress={darLike}
        >
          <Text style={styles.textoBoton}>Dar Like</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonRestar}
          onPress={restarLike}
        >
          <Text style={styles.textoBoton}>Restar Like</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonReiniciar}
          onPress={reiniciar}
        >
          <Text style={styles.textoBoton}>Reiniciar a cero</Text>
        </TouchableOpacity>

        <Text style={styles.tituloHistorial}>
          Historial de clics
        </Text>

        <View style={styles.encabezado}>
          <Text style={styles.encabezadoTexto}>Nº Clic</Text>
          <Text style={styles.encabezadoTexto}>Hora</Text>
        </View>

        {historial.map((item, index) => (
          <View style={styles.fila} key={index}>
            <Text style={styles.dato}>{item.numero}</Text>
            <Text style={styles.dato}>{item.hora}</Text>
          </View>
        ))}

        {historial.length === 0 && (
          <Text style={styles.vacio}>
            Todavía no hay Likes registrados.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ddd6fe',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: 450,
    padding: 25,
    borderRadius: 18,
    alignItems: 'center',
    elevation: 6,
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#29245c',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666666',
    marginTop: 10,
  },
  contador: {
    fontSize: 65,
    fontWeight: 'bold',
    color: '#2563eb',
    marginVertical: 15,
  },
  superado: {
    color: '#e54848',
  },
  botonLike: {
    backgroundColor: '#22c55e',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  botonRestar: {
    backgroundColor: '#f59e0b',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  botonReiniciar: {
    backgroundColor: '#ef4444',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tituloHistorial: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 15,
    color: '#29245c',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 12,
    backgroundColor: '#e0e7ff',
    borderRadius: 8,
  },
  encabezadoTexto: {
    fontWeight: 'bold',
    color: '#29245c',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  dato: {
    color: '#333333',
  },
  vacio: {
    color: '#888888',
    marginTop: 15,
  },
});
