export default function Page() {
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form action="/login" method="POST">
          <input type="text" name="username" placeholder="Usuário" required />
          <input type="password" name="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
