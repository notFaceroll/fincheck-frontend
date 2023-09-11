import { Outlet } from "react-router-dom";
import illustration from "../../assets/illustration.png";
import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 h-full flex items-center justify-center flex-col gap-16">
        <Logo className="h-6 text-gray-500" />
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      <div className="w-1/2 h-full flex justify-center itens-center p-8 relative">
        <img
          src={illustration}
          alt="login"
          className="object-cover w-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
        />
        <div className="max-w-[656px] bg-white absolute bottom-8 rounded-b-[32px] p-10">
          <Logo className="text-teal-900 h-8" />

          <p className="text-gray-700 font-medium text-xl mt-8">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
