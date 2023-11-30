import React from 'react';

const Contact = () => {
    return (
        <main className='mt-14 min-h-screen'>
            <section>
                <div className="container mx-auto">
                    <div>
                        <h2 className='text-xl md:text-3xl text-center font-bold lg:text-4xl'>Contact us</h2>
                    </div>
                    <div className=' bg-slate-400 p-5 max-w-[600px] mx-auto rounded-lg'>
                        <form action="" className='space-y-5'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                                <div>
                                    <label htmlFor="">First Name</label>
                                    <input type="text" placeholder='First Name' className='w-full rounded-md p-2' />
                                </div>
                                <div>
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" placeholder='Email' className='w-full rounded-md p-2' />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                                <div>
                                    <label htmlFor="">Email</label>
                                    <input type="text" placeholder='Email' className='w-full rounded-md p-2' />
                                </div>
                                <div>
                                    <label htmlFor="">Phone</label>
                                    <input type="text" placeholder='Phone' className='w-full rounded-md p-2' />
                                </div>
                            </div>
                            <div>
                                <textarea name="" id="" cols="30" rows="10" className='w-full rounded-lg'></textarea>
                            </div>
                            <div className='text-center'>
                                <input type="submit" className='bg-pink-600 px-4 md:bg-pink-10 text-white py-2' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;