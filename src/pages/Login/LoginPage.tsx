function LoginPage() {
  return (
    <div className="flex flex-col w-1/4 h-1/4 p-5 rounded-md shadow border border-neutral-200">
      <h2 className="text-xl font-semibold">Entrar</h2>
      <p className="text-sm">Faça login com a sua conta do GOOGLE sem precisar se cadastrar.</p>
      <button className="mt-10 w-fit mx-auto bg-blue-500 text-white rounded-md p-3">
        Entrar com o Google
      </button>
    </div>
  )
}

export default LoginPage
