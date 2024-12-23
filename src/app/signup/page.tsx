'use client';

import { useFormState } from 'react-dom';
import signupAction from './signupActions';
export default function Signup() {
    const [ error, setError ] = useFormState();
	return (
		<div className="flex flex-col min-h-[95vh] items-center justify-center">
			<div className="flex flex-col min-h-full items-center justify-center">
				<h1>Signup</h1>

				{/* Formulário de cadastro */}
				<form action="formAction" autoComplete="off">
					<div className="flex flex-col justify-center items-center gap-4">
						{error && <p className="text-red-500">{error}</p>}
						<input type="text" autoComplete="off" placeholder="Código do Usuário" className="h-8 border rounded-md" />
						<input type="text" autoComplete="off" placeholder="Nome" className="h-8 border rounded-md" />
						<input type="text" autoComplete="off" placeholder="Sobre Nome" className="h-8 border rounded-md" />
						<input type="email" autoComplete="off" placeholder="E-mail" className="h-8 border rounded-md" />
						<input type="password" placeholder="Senha" className="h-8 border rounded-md" />
						<input type="password" placeholder="Confirme a Senha" className="h-8 border rounded-md" />
						<button type="submit">Cadastrar</button>
					</div>
				</form>
			</div>
			{/* Botões de login */}
		</div>
	);
}
