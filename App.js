import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura:'',
      imc:'',
      resultado:'Indeterminado',
      cor: 'rgba(0,0,0,0.7)'
    };
  };

  calculaImc =()=>{
    let p = parseFloat(this.state.peso);
    let a = parseFloat(this.state.altura);

    const imc = Math.round( p/(a*a));
    this.setState({imc :imc});

    if(imc < 18.5){
      this.setState({resultado:'Magreza'});
      this.setState({cor: '#f1e40f'});
    }else if(imc >= 18.5 && imc < 25 ){
      this.setState({resultado:'Normal'});
      this.setState({cor: '#2ecc71'});
    }else if(imc >= 25 && imc < 30){
      this.setState({resultado:'Sobrepeso'});
      this.setState({cor: '#e67e22'});
    }else if(imc >= 30 && imc < 40){
      this.setState({resultado:'Obesidade'});
      this.setState({cor: '#e74c3c'});
    }else if(imc >= 40){
      this.setState({resultado:'Obesidade Grave'});
      this.setState({cor: '#e61e22'});
    }

  };
  
  render(){
  return(
    <View style={styleApp.container}>
      <View>
        <Text style={styleApp.text}>Seu Peso</Text>
        <View style={[styleApp.resultado, {backgroundColor:this.state.cor}]}>
          <Text style={styleApp.imc}> {this.state.imc} </Text>
          <Text style={styleApp.resultadoImc}>{this.state.resultado}</Text>
        </View>
      </View>
      <View>
        <TextInput 
          style={styleApp.inputText}
          label="PESO"
          onChangeText={(peso)=>this.setState({peso: peso.replace(',', '.')})}
          value={this.state.peso}
        />
      
        <TextInput 
          style={styleApp.inputText} 
          label="ALTURA" 
          onChangeText={(altura)=>this.setState({altura: altura.replace(',', '.')})}
          value={this.state.altura} 
        />
 
        <Button 
        mode='contained' 
        onPress={this.calculaImc}
        color='#2ecc71'
        >
          Calcular imc
        </Button>
      </View>
    </View>
  );
}
}

const styleApp = StyleSheet.create({
  container:{
    height:'100%',
    backgroundColor:'#ccc',
    padding: 20,
    justifyContent:'center'
  },
  resultado:{
    padding:10,
    borderWidth:2,
    borderColor: '#000',
    borderRadius: 5,
    width: '50%',
    marginLeft:'auto',
    marginRight:'auto',
    alignItems:'center',
  },
  text:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:18,
  },
  imc:{
    color:'#fff',
    fontSize:22,
    fontWeight:'bold',
  },
  resultadoImc:{
    color:'#fff',
  },
  
  inputText:{
    marginVertical:10,
    backgroundColor:'rgba(0,0,0,0.6)',
  },
})

export default App;

