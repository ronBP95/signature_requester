import ParticleBackground from './particlebackground'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ParticleBackground />
      <div className="flex h-16 items-center justify-between gap-8 px-4 sm:px-6 border-solid border-slate-200 border-b border-b-gray-800 opacity-100 bg-gray-950">
        <ul className="flex items-center gap-4">
          <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1maWxlLXBlbi1pY29uIGx1Y2lkZS1maWxlLXBlbiI+PHBhdGggZD0iTTEyLjUgMjJIMThhMiAyIDAgMCAwIDItMlY3bC01LTVINmEyIDIgMCAwIDAtMiAydjkuNSIvPjxwYXRoIGQ9Ik0xNCAydjRhMiAyIDAgMCAwIDIgMmg0Ii8+PHBhdGggZD0iTTEzLjM3OCAxNS42MjZhMSAxIDAgMSAwLTMuMDA0LTMuMDA0bC01LjAxIDUuMDEyYTIgMiAwIDAgMC0uNTA2Ljg1NGwtLjgzNyAyLjg3YS41LjUgMCAwIDAgLjYyLjYybDIuODctLjgzN2EyIDIgMCAwIDAgLjg1NC0uNTA2eiIvPjwvc3ZnPg=="></img></li>
          <li>Signature Requester</li>
        </ul>
        <ul>
          <Link href="/login">
            <li className="z-1 max-sm:hidden inline-block rounded-4xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 hover:cursor-pointer dark:bg-gray-700 dark:hover:bg-gray-600">Login</li>
          </Link>
        </ul>
      </div>
      <div className="p-30 items-center justify-center text-center">
        <h1 className="text-7xl">Request Signatures</h1>
        <h1 className="text-7xl">for your entire organization</h1>
        <p className="mt-5">Sign documents with ease and efficiency. Automate your entire signing workflow that integrates seamlessly with your existing tools.</p>
        <div className="flex items-center justify-center">
          <Link href="/login" className="mt-5 w-48 bg-blue-500 hover:bg-sky-700 text-white py-2 px-4 rounded hover:cursor-pointer ">Try it now!</Link>
        </div>
      </div>
    </div>
  );
}
