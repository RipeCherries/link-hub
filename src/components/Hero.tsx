import Animation from "@/components/Animation";

export default function Hero() {
    return (
        <section className="flex items-center justify-between pt-24 max-w-6xl mx-auto">
            <div>
                <div className="max-w-xl mb-8">
                    <h1 className="text-5xl font-bold text-zinc-600 text-justify">
                        Одна ссылка,<br/>тысячи возможностей:<br/>
                        <span className="text-blue-700">делитесь своим миром везде!</span>
                    </h1>
                    <h2 className="text-zinc-400 text-lg mt-6 text-justify">
                        Делитесь своими ссылками, социальными профилями, контактной информацией и многим другим на одной
                        странице
                    </h2>
                </div>
                <form className="inline-flex items-center shadow-lg shadow-gray-700/20">
                    <span className="bg-white py-4 pl-4">linkhub.to/</span>
                    <input type="text" className="py-4" placeholder="username"/>
                    <button type="submit" className="bg-blue-500 text-white py-4 px-6">
                        Присоединиться
                    </button>
                </form>
            </div>
            <Animation src="/animations/hero-section-animation.json" styles="w-5/12"/>
        </section>
    );
}
