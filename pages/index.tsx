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
                        className="px-4 sm:h-10 md:h-16 lg:h-20"
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
            <footer className="flex bg-slate-800 text-slate-100 p-8 justify-evenly flex-col md:flex-row  gap-4">
                <div className="text-center w-42">
                    <h2 className="font-bold">Contact Us:</h2>
                    <p className="text-sm">
                        <span className="text-bold">Email:</span>{" "}
                        contact@devarksolutions.com
                    </p>
                </div>
                <div className="text-center w-42 text-sm">
                    <h2 className="font-bold text-md">Registered Address:</h2>
                    <p>DevArk Solutions Limited,</p>
                    <p>Henleaze Business Centre, Harbury Road,</p>
                    <p>Bristol,</p>
                    <p>BS9 4PN</p>
                </div>
            </footer>
        </>
    );
}
