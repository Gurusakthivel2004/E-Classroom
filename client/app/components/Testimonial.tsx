import React from 'react'

export default function Testimonial() {
  return (
    <section 
        id="testimonials" 
        data-aos="fade-left" 
        className='text-white border-solid border-t-2 border-white my-6 mb-28'>
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl font-bold text-center">
                What's Different About Classroom?
            </h2>
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6 bg-sky-800">
                <div className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg rounded-full bg-sky-800 md:flex md:w-1/3">
                    <img className="w-24 -mt-14 rounded-full" src="/annachi.png" alt="Harish KK" />
                    <h5 className="text-lg font-bold">Harish</h5>
                    <p className="text-sm text-darkGrayishBlue">Classroom has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:w-1/3">
                    <img className="w-24 -mt-14 rounded-full " src="/bro.jpg" alt="Jaya surya" />
                    <h5 className="text-lg font-bold">Jaya surya</h5>
                    <p className="text-sm text-darkGrayishBlue">“We have been able to cancel so many other subscriptions since using Classroom. There is no more cross-channel confusion and everyone is much more focused.”</p>
                    </div>
                <div className="hidden flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:flex md:w-1/3">
                    <img className="w-24 -mt-14 rounded-full" src="/maapla.jpg" alt="Hariharan" />
                    <h5 className="text-lg font-bold">Hariharan</h5>
                    <p className="text-sm text-darkGrayishBlue">Classroom allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”</p>
                </div>
            </div>

        </div>
    </section>
  )
}
