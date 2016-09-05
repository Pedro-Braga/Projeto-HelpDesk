
/* jshint esversion:6*/


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var cadastro = {
  idAtend : {
    type:Schema.Types.ObjectId,
    ref: 'Atendimento'
  },
  colaborador : {
    type: String,
    require:true
  },
  data : {
    type:Date,
  },
  idAluno : {
    type:Number,
    require:true
  },
  entrada : {
    type:String,
  },
  idFreshdesk : {
    type:Number
  },
  aplicacao : {
    type:String
  },
  device : {
    type:String
  },
  problema : {
    type:String
  },
  recorrente : {
    type:Boolean
  },
  origem : {
    type:String,
    require:true
  },
  abriuDemanda : {
    type:Boolean
  },
  status : {
    type:String,
    require:true
  },
  diagnostico : {
    type:String,
    require:true
  },
  resposta : {
    type:String,
    require:true
  },
  observacao : {
    type:String,
  },
};

var cadastroSchema = new Schema(cadastro);

module.exports = mongoose.model('Cadastro', cadastroSchema);
