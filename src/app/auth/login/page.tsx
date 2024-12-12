import SignInForm from "../_components/login-form";

export default function SignInPage() {
  return (
    <div className="flex w-full max-w-[350px] flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Acessar painel
        </h1>

        <p className="text-sm text-muted-foreground">
          Acompanhe seu cardápio pelo painel!
        </p>
      </div>

      <SignInForm />
    </div>
  );
}
