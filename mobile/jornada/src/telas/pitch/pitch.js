import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView} from 'react-native';
import Estilos from './estilo';
import YouTube from 'react-native-youtube';
import Projeto from './projeto';

export default function Pitch() {
  //youtube();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={Estilos.container}>
          <Projeto
            title="Projeto XYZ"
            participantes="Eu, eu mesma e Irene"
            resumo="bla bla bla"
          />
          <Projeto
            title="Projeto Z"
            participantes="Eu, eu mesma e Irene"
            resumo="bla bla bla"
          />
          <Projeto
            title="Projeto X"
            participantes="Eu, eu mesma e Irene"
            resumo="bla bla bla"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
