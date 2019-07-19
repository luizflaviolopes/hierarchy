import React from 'react';
import logo from './logo.svg';
import './App.css';
import HierarchyDraw from './Hierarchy/HierarchyDraw'


const dados = [{"nome":"Subsecretaria de Gestão e Apoio às Políticas Estratégicas","sigla":"SGAPE","id":8,"pai":67,"nivel":2},{"nome":"Superintendencia de Gestão das UAI's","sigla":"SGUAI","id":16,"pai":24,"nivel":1},{"nome":"Subsecretaria de Tecnologia e Comunicação","sigla":"SUBTIC","id":24,"pai":67,"nivel":2},{"nome":"Superintendencia de Operação e Manutenção","sigla":"SOM","id":30,"pai":32,"nivel":1},{"nome":"Superintendencia de Humanização","sigla":"SH","id":31,"pai":32,"nivel":1},{"nome":"Subsecretaria de Operação e Manutenção da CA","sigla":"SOGCA","id":32,"pai":67,"nivel":2},{"nome":"Superintendencia Central de Serviços","sigla":"SCS","id":34,"pai":40,"nivel":1},{"nome":"Superintendencia Gestão Logística e Patrimonial","sigla":"SGLP","id":35,"pai":40,"nivel":1},{"nome":"Superintendencia Sistemas e Cadastros de Logística e Patrimônio","sigla":"SSCLP","id":36,"pai":40,"nivel":1},{"nome":"Gabinete","sigla":"GAB","id":39,"pai":67,"nivel":2},{"nome":"Subsecretaria de Gestão e Logistica","sigla":"SGL","id":40,"pai":67,"nivel":2},{"nome":"Superintendencia Central de Governança Eletrônica","sigla":"SCGE","id":41,"pai":24,"nivel":1},{"nome":"Superintendência de Planejamento Gestão e Finanças","sigla":"SPGF","id":45,"pai":67,"nivel":2},{"nome":"Superintendencia Central de Administração de Pessoal","sigla":"SCAP","id":50,"pai":57,"nivel":1},{"nome":"Superintendencia Central de Política de Gestão de Pessoas","sigla":"SCPRH","id":51,"pai":57,"nivel":1},{"nome":"Superintendencia Central de Saúde do Servidor e Perícia Médica","sigla":"SCPMSO","id":54,"pai":57,"nivel":1},{"nome":"Núcleo de Modernização em Gestão de Pessoas","sigla":"NMGP","id":56,"pai":57,"nivel":1},{"nome":"Subsecretaria de Gestão de Pessoas","sigla":"SUGESP","id":57,"pai":67,"nivel":2},{"nome":"Superintendencia Central de Planejamento e Programação Orçamentária","sigla":"SCPPO","id":60,"pai":64,"nivel":1},{"nome":"Superintendencia Central de Parcerias","sigla":"SCP","id":63,"pai":64,"nivel":1},{"nome":"Subsecretaria de Planejamento e Orçamento","sigla":"SPLOR","id":64,"pai":67,"nivel":2},{"nome":"Secretaria de Planejamento e Gestão","sigla":"SEPLAG","id":67,"pai":null,"nivel":3}];


function App() {
  return (
    <div className="App">
      <HierarchyDraw  data={dados}></HierarchyDraw>
    </div>
  );
}

export default App;
