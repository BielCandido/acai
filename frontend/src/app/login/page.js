import '../styles/login.css'

export default function Page() {
  return (
<div className="container">
  <h2>Login</h2>
  <form action="/login" method="POST">
    <div>
      <label for="username">Nome de Usuário:</label>
      <input type="text" id="username" name="username" required />
    </div>
    <div>
      <label for="password">Senha:</label>
      <input type="password" id="password" name="password" required />
    </div>
    <button type="submit">Entrar</button>
  </form>
</div>
  );
}
