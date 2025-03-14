
🎭 Testes Automatizados com Playwright - Atlas QA
📌 Descrição
Este repositório contém três testes automatizados utilizando Playwright para validar funcionalidades essenciais do sistema Atlas QA.

🛠️ Tecnologias Utilizadas
Playwright - Framework de testes end-to-end
Node.js - Para executar os testes
GitHub - Para versionamento de código
⚙️ Configuração do Ambiente
1️⃣ Instalar o Node.js
Baixe e instale a versão mais recente do Node.js.

2️⃣ Clonar o repositório
bash
Copiar
Editar
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
3️⃣ Instalar as dependências
bash
Copiar
Editar
npm install
4️⃣ Instalar Playwright
bash
Copiar
Editar
npx playwright install
🚀 Executando os Testes
📌 Rodar todos os testes
bash
Copiar
Editar
npx playwright test
📌 Rodar um teste específico
bash
Copiar
Editar
npx playwright test nome-do-teste.spec.ts
🧪 Testes Implementados
1️⃣ Teste de Login

Acessa a página de login
Insere as credenciais
Clica no botão de login
Valida o acesso à plataforma
2️⃣ Teste de Troca de Idioma

Acessa o menu de idiomas
Seleciona um idioma diferente
Verifica se a mudança foi aplicada corretamente
3️⃣ Teste de Logout

Acessa o menu do usuário
Clica na opção de logout
Verifica se foi redirecionado para a tela de login
