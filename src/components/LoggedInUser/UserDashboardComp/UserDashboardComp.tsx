
export const UserDashboardComp = () => {

    return (
        <section className="w-[1100px] mx-auto min-h-[100vh] flex gap-[20px]">
            <div className="w-[70%] max-h-[calc(100vh-60px)] pt-[10px] overflow-y-auto max">
                <div className="w-full h-[26rem] bg-white rounded-[5px]">
                    <div className="relative">
                        <div className="bg-blue-100 h-48 w-full"></div>
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-4.553a2 2 0 012.828 0l.707.707a2 2 0 010 2.828L18 14m-3-4l-4 4m0 0l-4-4m4 4V6" />
                            </svg>
                        </button>
                        <div className="absolute bottom-0 left-6 transform translate-y-1/2">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full bg-gray-300 flex justify-center items-center border-4 border-white">
                                    <img src="/dumy-profile.png" className="w-full h-full" alt="" />
                                </div>
                                <button className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-4.553a2 2 0 012.828 0l.707.707a2 2 0 010 2.828L18 14m-3-4l-4 4m0 0l-4-4m4 4V6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 pt-16 pb-6">
                        <h2 className="text-xl font-semibold">Rahul Rathor</h2>
                        <p className="text-gray-500">Chandigarh, Chandigarh, India · <span className="text-blue-500 underline cursor-pointer">Contact info</span></p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700">Open to</button>
                            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-50">Add profile section</button>
                            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-50">Enhance profile</button>
                            <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded font-medium hover:bg-gray-100">Resources</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-[30%] h-fit py-[10px]">
                <div className="w-full h-[200px] bg-white rounded-[5px]"></div>
            </div>
        </section>
    )
}