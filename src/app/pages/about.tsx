import React from 'react';
import NavBar from '../components/NavBar';

function About() {
  return (
  <main>
      <NavBar />
    <div className="bg-gray-500 min-h-screen flex items-center justify-center">
      <div className="max-w-lg bg-black p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl text-center font-bold mb-4">Projeto de To Do List</h1>
        <p className="text-gray-700">
          Este é um projeto de lista de tarefas desenvolvido com o objetivo de ajudar a organizar suas atividades diárias. A lista de tarefas permite que você adicione, marque como concluída e remova tarefas conforme necessário.
        </p>
        <p className="text-gray-700 mt-4">
          Com esta aplicação simples, você poderá manter o controle de suas tarefas pendentes, priorizá-las e garantir que nada seja esquecido. A interface intuitiva facilita a adição e a edição das tarefas, tornando o gerenciamento de suas atividades mais eficiente.
        </p>
        <p className="text-gray-700 mt-4">
          O projeto de To Do List foi desenvolvido utilizando o framework Tailwind CSS, que permite criar interfaces atraentes e responsivas de forma rápida e fácil. Com a combinação do Tailwind CSS e JavaScript, esta aplicação oferece uma experiência de usuário agradável e funcionalidades essenciais para a gestão de suas tarefas diárias.
        </p>
        <p className="text-gray-700 mt-4">
          Esperamos que este projeto seja útil para você no seu dia a dia. Desfrute da organização e produtividade que uma lista de tarefas bem estruturada pode proporcionar!
        </p>
      </div>
    </div>
  </main>
  )
};

export default About;