import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { FcFeedback } from 'react-icons/fc';

const CustomerReviews = () => {
    const reviews = [
        { id: 1, name: 'John Doe', feedback: 'Great quality products and fast delivery!' },
        { id: 2, name: 'Jane Smith', feedback: 'Excellent customer service. Highly recommended!' },
        { id: 3, name: 'Mike Johnson', feedback: 'Affordable prices and a wide variety of options.' },
        { id: 4, name: 'Emily Davis', feedback: 'Amazing shopping experience. I’ll definitely be back for more!' },
        { id: 5, name: 'Robert Brown', feedback: 'Great selection of sports gear. The prices are unbeatable.' },
        { id: 6, name: 'Sophia Williams', feedback: 'Fast delivery and top-notch quality. I am very impressed!' }
      ];
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-2xl text-center font-bold py-6'>What Our Customers Say</h2>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    reviews.map(review => (<div key={review.id} className='border-2 p-4 text-center rounded-lg space-y-2'>
                        <p><FcFeedback className='mx-auto text-5xl' /></p>
                        <div className='flex items-center justify-center gap-2'>
                        <p><FaUserGraduate className='mx-auto text-xl text-orange-500'/></p>
                        <h2 className='text-xl font-bold'>{review.name}</h2>
                        </div>
                        <p>{review.feedback}</p>
                    </div>))
                }
            </div>
        </div>
    );
};

export default CustomerReviews;