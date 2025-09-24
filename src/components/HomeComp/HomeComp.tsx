
import Link from "next/link"

export const HomeComp = () => {

    return (
        <>
            <nav className="w-full h-[73.5px]">
                <section className="mx-auto flex w-[1100px] py-[10px] items-center justify-between">
                    <div className="text-[24px] w-[140px] h-auto"><img src="/primary-logo.png" alt="primary-logo" /></div>
                    <div>
                        <div className="space-x-[10px]">
                            <button className="border-[1px] cursor-pointer border-blue-500 rounded-[30px] px-[30px] h-[50px]"><Link href={`/signup`}>
                                Join now
                                </Link></button>
                            <button className="border-[1px] cursor-pointer border-blue-500 rounded-[30px] px-[30px] h-[50px]">
                                <Link href={`/signin`}>
                                Sign in
                                </Link>
                            </button>
                        </div>
                    </div>
                </section>
            </nav>
            <main className="w-full">
                <section className="flex w-full mt-[60px]">
                    <div className="flex justify-center flex-1 items-center">
                        <p className="w-[400px] flex justify-center items-center text-[40px] leading-[40px]">Welcome to your professional network</p>
                    </div>
                    <div className="">
                        <img src="https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png" alt="" />
                    </div>
                </section>
            </main>
        </>
    )
}