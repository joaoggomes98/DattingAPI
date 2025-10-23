# 💘 DattingApp API

API desenvolvida em **ASP.NET Core** para gerir utilizadores e funcionalidades de um aplicativo de relacionamentos.

---

### 🚀 Como executar o projeto
```bash
1️⃣ Clonar o repositório

git clone https://github.com/joaosilva/datingapp.git
cd datingapp/API

2️⃣ Restaurar dependências
dotnet restore

3️⃣ Criar ou atualizar a base de dados

Se o projeto utiliza Entity Framework Core, aplica as migrações:
dotnet ef database update

4️⃣ Executar o servidor

dotnet run

A API ficará disponível em:
👉 https://localhost:5001

E a documentação Swagger em:
👉 https://localhost:5001/swagger

📡 Endpoints principais

Método	Rota	Descrição
GET	/api/members	Lista todos os utilizadores
GET	/api/members/{id}	Retorna um utilizador pelo ID

🧰 Tecnologias usadas

ASP.NET Core 8.0
Entity Framework Core
C#
Swagger / OpenAPI
SQLite ou SQL Server

📁 Estrutura básica do projeto
DatingApp/
 ├── API/
 │   ├── Controllers/
 │   │   └── MembersController.cs
 │   ├── Data/
 │   │   └── AppDbContext.cs
 │   ├── Models/
 │   │   └── AppUser.cs
 │   ├── Program.cs
 │   └── appsettings.json
 ├── README.md
 └── .gitignore

🧠 Próximos passos

🔒 Implementar autenticação (JWT)
💬 Adicionar sistema de mensagens
🖼️ Upload de fotos de perfil
🌍 Deploy da API (Azure, Render, Railway, etc.)


📦 Repositório: github.com/joaoggomes98/datingapp
