import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="w-1/4 border border-[#F5F7F9] p-5 shadow rounded">
        <h1 className="text-xl font-bold">Faça Login</h1>
        <p className="text-sm text-neutral-400">
          Entre com a sua conta do google ou então com a sua conta do APP.
        </p>
        <div className="w-[90%] mx-auto rounded-lg h-[2px] mt-5 bg-neutral-200"/>
        <div className="flex justify-center">
          <a href="#" className="mt-5 flex items-center gap-3 text-sm font-semibold hover:bg-[#F5F7F9] p-3 rounded-md transition-all duration-100 cursor-pointer">
            <FcGoogle className="size-4"/> Login com Google
          </a>
        </div>
      </div>
    </div>
  );
}
