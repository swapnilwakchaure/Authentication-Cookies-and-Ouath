import Link from "next/link";

export default function Register() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="border p-4 rounded shadow-2xl">
        <h1 className="text-md">Register Page</h1>
        <form action="">
          <input
            type="text"
            autoFocus
            className="border rounded my-2 pl-2"
            placeholder="Full Name"
          />
          <br />
          <input
            type="email"
            className="border rounded my-2 pl-2"
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            className="border rounded my-2 pl-2"
            placeholder="Password"
          />
          <br />
          <button className="border rounded hover:border-sky-900 my-2 w-full bg-sky-900 text-white hover:text-sky-900 hover:bg-white">
            Register
          </button>
        </form>
        <div className="flex justify-end text-sm">
          <Link href="/login" className="underline text-blue-600">
            Already registerd
          </Link>
        </div>
      </div>
    </div>
  );
}
