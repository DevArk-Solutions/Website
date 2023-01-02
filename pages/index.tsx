import Image from "next/image";

export default function Home() {
    return (
        <>
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
                        className="px-2 sm:h-10 md:h-16 lg:h-20"
                    />
                </div>
                <div className="h-full flex justify-center items-center">
                    <div className="text-center px-4 -mt-20">
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
            <footer className="flex bg-slate-800 text-slate-100 p-4 justify-evenly">
                <div className="text-center w-min">
                    <h2 className="font-bold">Contact Us:</h2>
                    <p className="text-sm">
                        Email: contact@devarksolutions.com
                    </p>
                </div>
                <div className="text-center w-42">
                    <h2 className="font-bold">Registered Address:</h2>
                    <p className="text-sm">DevArk Solutions Limited,</p>
                    <p className="text-sm">
                        Henleaze Business Centre, Harbury Road,
                    </p>
                    <p className="text-sm">Bristol,</p>
                    <p className="text-sm">BS9 4PN</p>
                </div>
            </footer>
        </>
    );
}
