
export default function Features() {
  return (
    <section 
        id="features" 
        data-aos="fade-left"
        className="text-white border-solid border-t-2 border-white mt-12">
            {/* <div className="">
                <h3 className="text-4xl font-bold text-center mt-12  mx-auto">Features and Management</h3>
            </div> */}
        
        <div className="container flex flex-col px-4 mx-auto mt-6 space-y-12 md:space-y-0 md:flex-row py-20">
            <div className="flex flex-col items-center mx-auto my-auto space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center">
                    What's Different about Classroom?
                </h2>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Bring your vision to life with our Next.js-powered Create Group feature. Establish your own vibrant community effortlessly. Set a name, define your purpose, and invite like-minded individuals to join. Foster collaboration, spark conversations, and organize events. Create a space where ideas flourish and connections thrive. With Next.js, building your dream community has never been easier.    
                </p>
            </div>
            <div className="flex flex-col space-y-8 md:w-1/2">
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 font-bold text-sky-900 rounded-full bg-white md:py-1 ">
                                01
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Create Groups
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">
                            Create Groups
                        </h3>
                        <p className="text-darkGrayishBlue">
                        Bring your vision to life with our Next.js-powered Create Group feature. Establish your own vibrant community effortlessly. Set a name, define your purpose, and invite like-minded individuals to join. Foster collaboration, spark conversations, and organize events. Create a space where ideas flourish and connections thrive. With Next.js, building your dream community has never been easier.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 font-bold text-sky-900 rounded-full bg-white md:py-1 ">
                                02
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Save Notes
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">
                            Save Notes
                        </h3>
                        <p className="text-darkGrayishBlue">
                        Effortlessly create and organize your notes with our Next.js-powered note-taking feature. Capture your thoughts, ideas, and reminders in a seamless and intuitive interface. Enjoy a clutter-free writing experience with markdown support for easy formatting    
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 font-bold text-sky-900 rounded-full bg-white md:py-1 ">
                                03
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Everything you need in one place
                            </h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">
                            Everything you need in one place
                        </h3>
                        <p className="text-darkGrayishBlue">
                        Effortlessly create and organize your notes with our Next.js-powered note-taking feature. Capture your thoughts, ideas, and reminders in a seamless and intuitive interface. Enjoy a clutter-free writing experience with markdown support for easy formatting
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
