import 'tailwindcss/tailwind.css'

export default function Contact() {


    return (
        <section id='#contact' className="text-center py-20">
            <h1 className="text-3xl font-bold mb-2 p">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Contact Me
                </span>
            </h1>
            <p className="max-w-2xl mx-auto mb-6 mt-5 font-bold">
                {/* We love to hear from you! Please fill out the form below and we ll get in touch with you as soon as possible. */}
            </p>
            <form className="max-w-xl border border-gray-600 rounded-md py-5 px-6 mx-auto space-y-4 mt-10 ">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-2 border bg-inherit border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600 "
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="w-full px-4 py-2  border bg-inherit border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-600"
                    />
                </div>
                <div>
                    <textarea
                        name="description"
                        placeholder="Description"
                        rows={4}
                        className="w-full px-4 py-2 border bg-inherit border-gray-600 rounded-md focus:outline-none focus:ring-1  focus:ring-emerald-600"
                    />
                </div>
                <button
                    type="submit"
                    // className="px-6 py-2 bg-gradient-to-r from-sky-400 to-emerald-600 text-white font-bold rounded-md hover:from-emerald-600 hover:to-sky-400 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    className='w-full btn btn-icon'
                >
                    Submit
                </button>
            </form>
        </section>
    )
}