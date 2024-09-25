export default function Page() {
  return (
    <div>
      <h2>Login</h2>
      <form action="/login" method="POST">
        <div>
          <label htmlFor="username">Nome de Usuário:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
