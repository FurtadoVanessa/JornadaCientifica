import * as React from 'react';
import {Button, View, Text} from 'react-native';
import Estilos from './estilo';
import YouTube from 'react-native-youtube';

export default function Projeto(props) {
  //youtube();
  return (
    <View style={Estilos.card}>
      <View style={Estilos.event}>
        <Text style={Estilos.heads}>Título</Text>
        <Text style={Estilos.simpleText}>{props.title}</Text>
        <Text style={Estilos.heads}>Participantes</Text>
        <Text style={Estilos.simpleText}>{props.participantes}</Text>
        <Text style={Estilos.heads}> Resumo </Text>
        <Text style={Estilos.simpleText}>{props.resumo}</Text>
        <YouTube
          apiKey="AIzaSyDwTreTL1dKphDeoj6krJHK89OsxJRLA90"
          videoId="KVZ-P-ZI6W4" // The YouTube video ID
          play // control playback of video with true/false
          fullscreen={false} // control fullscreen or inline
          loop={false} // control whether the video should loop when ended
          showinfo
          controls={1}
          rel={false}
          style={Estilos.video}
        />
      </View>
    </View>
  );
}

// function youtube() {
//   YouTubeStandaloneAndroid.playVideo({
//     apiKey: 'AIzaSyDwTreTL1dKphDeoj6krJHK89OsxJRLA90', // Your YouTube Developer API Key
//     videoId: 'G_sBOsh-vyI', // YouTube video ID
//     autoplay: true, // Autoplay the video
//     startTime: 0, // Starting point of video (in seconds)
//   })
//     .then(() => console.log('Standalone Player Exited'))
//     .catch(errorMessage => console.error(errorMessage));
// }
