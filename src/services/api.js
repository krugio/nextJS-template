import axios from 'axios';



// Configuração para ambiente de produção
export const apiProduction = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Configuração para ambiente de desenvolvimento
const apiDevelopment = axios.create({
  baseURL: 'http://localhost:21075/api',
});

// Selecione a configuração apropriada com base no ambiente em tempo de execução
const api = process.env.NODE_ENV === 'production' ? apiProduction :  apiProduction;
// const api =  apiProduction 




async function listarCategorias() {
    const response = await api.get('/');
    return response.data;
  }



export {listarCategorias }
