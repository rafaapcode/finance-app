import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  return (
    <div className="flex flex-col w-1/4 h-1/4 p-5 rounded-md shadow border border-neutral-200">
      <h2 className="text-xl font-semibold">Entrar</h2>
      <p className="text-sm">
        Faça login com a sua conta do GOOGLE sem precisar se cadastrar.
      </p>
      <button className="mt-10 flex hover:bg-neutral-200 transition-all duration-100 border border-neutral-200 hover:border-neutral-100 items-center text-black gap-5 w-fit mx-auto bg-neutral-100 rounded-md p-3">
        <FcGoogle className="size-6" /> Entrar com o Google
      </button>
    </div>
  );
}

export default LoginPage;
