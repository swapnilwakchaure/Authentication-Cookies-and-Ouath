import Link from "next/link";

export default function Register() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1>Register Page</h1>
        <Link href="/login" className="underline text-blue-600">Already registerd</Link>
      </div>
    </div>
  );
}
