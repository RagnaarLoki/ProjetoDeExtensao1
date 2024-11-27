/*import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Função para embaralhar a string gerada
const embaralharString = (str) => {
    const array = str.split('');
    array.sort(() => Math.random() - 0.5);
    return array.join('');
};

// Componente React para gerar senha
const GeradorDeSenha = () => {
    const [data, setData] = useState('');
    const [senhaGerada, setSenhaGerada] = useState('');

    const gerarSenha = () => {
        if (!data) {
            alert('Por favor, insira sua data de aniversário.');
            return;
        }

        const nome = 'aleatorio';
        const caracteres = ['!', '@', '#', '$', '%', '&', '*'];
        const caractereEspecial = caracteres[Math.floor(Math.random() * caracteres.length)];
        const charOne = nome[Math.floor(Math.random() * nome.length)];
        const charTwo = nome[Math.floor(Math.random() * nome.length)];
        const year = new Date(data).getFullYear();

        let string = caractereEspecial + charOne + charTwo + year;
        string = embaralharString(string);

        setSenhaGerada(string);
    };

    return (
        <div>
            <h3>Gerar Senha</h3>
            <label>
                Insira sua data de aniversário (dd/mm):
                <input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
            </label>
            <button onClick={gerarSenha}>Gerar Senha</button>
            {senhaGerada && <p>Senha Gerada: {senhaGerada}</p>}
        </div>
    );
};

// Renderiza o componente no DOM
ReactDOM.render(<GeradorDeSenha />, document.getElementById('senha-gerada'));
*/