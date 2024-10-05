import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-14 text-zinc-500  py-4 font-bold">
      <p className="text-center">
        © 2024 Coffee Delivery - Criado por{" "}
        <Link
          href="https://www.linkedin.com/feed/"
          className="text-zinc-700 font-bold hover:underline"
          target="_blank"
        >
          Rodolpho Reis
        </Link>
      </p>
    </footer>
  );
}
