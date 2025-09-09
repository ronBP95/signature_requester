import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex h-16 items-center justify-between gap-8 px-4 sm:px-6 bg-gray-900">
        <ul className="flex items-center gap-4">
          <li>Logo Goes Here</li>
          <li>Signature Requester</li>
        </ul>
        <ul>
          <li className="z-1 max-sm:hidden inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 hover:cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600">Login</li>
        </ul>
      </div>
      <div className="p-30 items-center justify-center text-center">
        <h1 className="text-7xl">Request Signatures</h1>
        <h1 className="text-7xl">for your entire organization</h1>
        <p className="mt-5">Sign documents with ease and efficiency. Automate your entire signing workflow that integrates seamlessly with your existing tools.</p>
        <div className="flex items-center justify-center">
          <button className="mt-5 w-48 bg-blue-500 hover:bg-sky-700 text-white py-2 px-4 rounded hover:cursor-pointer ">Try it now!</button>
        </div>
      </div>
    </div>
  );
}
