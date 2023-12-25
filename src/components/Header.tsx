import Link from "next/link";
import { ImLink } from "react-icons/im";

export default function Header() {
    return (
        <header className="bg-white border-b py-5">
            <div className="max-w-6xl mx-auto flex justify-between">
                <div className="flex gap-10">
                    <Link href={'/'} className="flex items-center">
                        <ImLink size={24} style={{fill: "#1d4ed8"}}/>
                        <span className="ml-2 text-xl font-semibold text-blue-700">LinkHUB</span>
                    </Link>
                    <nav className="flex items-center gap-4 text-zinc-400 text-base">
                        <Link href={'/about'}>О проекте</Link>
                        <Link href={'/contact'}>Контакты</Link>
                    </nav>
                </div>
                <nav className="flex gap-4 text-zinc-400 text-base">
                    <Link href={'/login'}>Войти</Link>
                    <Link href={'/register'}>Создать аккаунт</Link>
                </nav>
            </div>
        </header>
    );
}
