// database.js
import mysql from 'mysql2/promise';
import { dbConfig } from '../db/dbconfig';

export async function connect() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        return connection;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error;
    }
}
