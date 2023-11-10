export default function Home() {
    const settings = [
        'Vite',
        'ReactTS + SWC',
        '--host',
        'localhost:4200',
        'Tailwind',
        'BrowserRouter',
        'Prettier',
    ];

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-black text-blue-500">
            <h1 className="mb-5 text-3xl font-semibold text-white">Enze Vite Boilerplate</h1>
            <div className="flex flex-row items-center gap-1">
                <span className="font-bold">🎉</span>
                <div className="flex flex-row items-center gap-1">
                    {settings.map((setting: string, index: number) => (
                        <span
                            key={index}
                            className="rounded-md bg-gray-800 px-2 py-0.5 text-xs font-semibold text-white"
                        >
                            {setting}
                        </span>
                    ))}
                </div>
            </div>
            <hr className="my-4 w-1/2 border-gray-600" />
            <div className="flex flex-row items-center gap-1">
                🚀
                <a
                    href="https://github.com/EnzeGH/EnzePlate"
                    target="_blank"
                    className="font-bold underline-offset-4 duration-200 hover:underline"
                >
                    Enze on GitHub
                </a>
            </div>
        </div>
    );
}
