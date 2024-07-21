import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1>Login Page</h1>
        <Link href="/register" className="underline text-blue-600">
          Don't have an account
        </Link>
      </div>
    </div>
  );
}
