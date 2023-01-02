import Image from "next/image";

export default function Home() {
    return (
        <main
            className="overflow-hidden h-screen"
            style={{
                background:
                    "linear-gradient(200deg, rgba(166, 180, 200, 0.7) -7.37%, rgba(255, 255, 255, 0) 75.6%)",
            }}
        >
            <div className="flex justify-center grow mt-2">
                <img
                    src="/logo.svg"
                    alt="DevArk Solutions Logo"
                    className="px-2 md:w-1/3"
                />
            </div>
            <div className="h-full flex justify-center items-center">
                <div className="text-center px-4">
                    <h1 className="text-5xl font-bold mb-3">Coming Soon</h1>
                    <p>
                        If you would like to get in contact, please use the
                        email below.
                    </p>
                    <a
                        className="text-violet-600 hover:text-violet-400"
                        href="mailto:contact@devarksolutions.com"
                    >
                        contact@devarksolutions.com
                    </a>
                </div>
            </div>
        </main>
    );
}
