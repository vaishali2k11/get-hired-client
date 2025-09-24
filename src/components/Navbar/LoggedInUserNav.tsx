
import { IoMdHome } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
export const LoggedInUserNav = () => {

    return (
        <header className=" bg-white w-full shadow-md">
            <div className="mx-auto flex items-center justify-between bg-white px-6 py-1 w-[1100px]">
                <div className="flex items-center space-x-1">
                    <img src="/primary-logo.png" alt="LinkedIn Logo" className="h-8 w-auto" />

                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                        <span className="text-gray-500">🔍</span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none ml-2 text-sm w-50 sm:w-50"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-[25px]">
                    <nav>
                        <ul className="flex space-x-5">
                            <li className="nav-item text-gray-700 font-semibold border-b-2 border-blue-500 pb-1"><IoMdHome className="w-[25px] h-auto" /></li>
                            <li className="nav-item text-gray-600 hover:text-gray-900 cursor-pointer"><MdGroup className="w-[25px] h-auto" /></li>
                            <li className="nav-item text-gray-600 hover:text-gray-900 cursor-pointer"><IoBag className="w-[25px] h-auto" /></li>
                            <li className="nav-item text-gray-600 hover:text-gray-900 cursor-pointer"><AiFillMessage className="w-[25px] h-auto" /></li>
                            <li className="nav-item text-gray-600 hover:text-gray-900 cursor-pointer"><IoNotifications className="w-[25px] h-auto" /></li>
                        </ul>
                    </nav>

                    <div className="flex items-center space-x-3">
                        <div className="flex flex-col items-center space-x-1 cursor-pointer">
                            <img src="/dumy-profile.png" alt="Profile" className="h-8 w-8 rounded-full" />
                            <span className="text-sm font-medium text-gray-700">Me ▼</span>
                        </div>

                        <div className="text-sm text-gray-700 cursor-pointer hover:underline">For Business ▼</div>

                        <button className="bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold hover:bg-yellow-300">
                            Try Premium
                        </button>
                    </div>
                </div>
            </div>

        </header>
    )
}