import React, { useState } from 'react';
import './CustomerReviews.css';
import Features from '../Features/Features';

const CustomerReviews = () => {
  const [showMore, setShowMore] = useState(false);

  const reviews = [
    {
      rating: 5,
      review: '"Thank you so much for delivery..."',
      author: 'Naeem Malik',
      date: '23/07/2024',
      time: '7:00 PM',
      location: 'Bangalore',
      occasion: 'birthday',
    },
    {
      rating: 5,
      review: '"All things I loved about f&p"',
      author: 'Ryan Malik',
      date: '23/07/2024',
      time: '6:58 PM',
      location: 'Delhi',
      occasion: 'birthday',
    },
    {
      rating: 5,
      review: '"Timely delivery the cake."',
      author: 'Aryan Malik',
      date: '23/07/2024',
      time: '6:57 PM',
      location: 'New Delhi',
      occasion: '',
    },
    {
      rating: 5,
      review: '"Nice"',
      author: 'Arhaan Malik',
      date: '23/07/2024',
      time: '6:57 PM',
      location: 'Noida',
      occasion: '',
    },
  ];

  return (
    <div className="customer-reviews">
      <h2>What Customers Are Saying</h2>
      <button>View All Reviews</button>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="rating">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="review-text">{review.review}</p>
            <p className="author">- {review.author}</p>
            <p className="date">{review.date}, {review.time}</p>
            <p className="location">Delivered At: {review.location}</p>
            <p className="occasion">Occasion: {review.occasion}</p>
          </div>
        ))}
      </div>
      <div className="content-section">
        <h3>Get Online Cake Delivery for a Variety of Cake Flavors</h3>
        <p>
          The best part about cake is that there can be a large variety of flavors and one can experiment with it quite often. Any flourishing cake shop would vouch by this criteria because variety keeps people interested. In our online cake shop, you would discover a plethora of cake flavors and we take a bit of pride in that. You would find a cake flavor for all your family members, friends, and relatives having varied preferences.
        </p>
        <p className={showMore ? "show" : "hide"}>
          Some would demand a chocolate cake while some would demand a pineapple flavored cake. Here, you would find the most innovative mix of cake flavors. For example, in the chocolate category of cake, there is a thrilling chocolate truffle cake, evergreen Black Forest Cake, and the enticing triple chocolate cake. Apart from that red velvet cake, lemon zest cake, orange tangy cake, cheesecake, mango cake, strawberry cake, butterscotch cake, caramel cake, etc. also graces our online portal. Look out for that desirable one and get the cake home delivery without much hassle anywhere in India or abroad.
        </p>
        <p className={showMore ? "show" : "hide"}>
          In general view, cake includes eggs as a softening agent. But that doesn't mean pure vegans cannot enjoy cakes. We have eggless cake category for most of the flavors and thus the strict vegetarians would also have a great time at your party. A cake can be of many types like cream cake, fondant cake, semi-fondant cake, cheesecake, cupcakes, muffins, designer cakes etc. We have all those types of cakes available in great variety of flavors. Another strength of our website is that you can get personalized cakes here which can include a picture of your loved ones. Keep looking for your favorite cakes and have a lovely celebration.
        </p>
        <p className={showMore ? "show" : "hide"}>
          A surprise gift is always a great memory especially when it comes from the people you admire the most. Making others happy gives a great satisfaction and that’s why one should not leave any opportunity to impress the other one. For example, if your boyfriend stays in some distant land and you have a long distance relationship, you can go for a special cake, lavish party cake to celebrate his recent promotion. To wish your grandparents on their anniversary, send a lovely designer anniversary cake. Similarly, for your distant relative in Dubai, get online cake delivery in Dubai after reviewing our stock of wonderful cakes.
        </p>
        <h3  className={showMore ? "show" : "hide"}>Order Cake Online from FNP & Bring a Smile to Your Loved One's Face</h3>
        <p  className={showMore ? "show" : "hide"}>
          Indulging in a slice of cake is a sweet and indulgent experience that can bring joy to anyone's day. At FNP, we believe that cake is more than just a dessert - it's a celebration of life's special moments. Whether you're looking to surprise your loved one on their birthday or just want to show them how much you care, avail of our swift online cake delivery service for an amazing shopping experience. With a range of options to choose from, you can easily find the perfect cake for any occasion. Whether you're looking for a cake for your partner, friends or any family member we have a variety of options from deliciously decadent chocolate cakes to fruity and refreshing options like strawberry or blueberry. We also have an amazing collection of cakes for mom that you can choose on her birthday or Mother’s Day. Offering multiple delivery options like same-day, fixed-time, express and standard, you can easily choose any slot at your convenience. So why wait? Order cake online from FNP today and let us help you create a memorable moment that you and your loved one will cherish forever.
        </p>
        <button onClick={() => setShowMore(!showMore)} className="more-btn">
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
      <div className="features">
        <Features/>
      </div>
    </div>
  );
};

export default CustomerReviews;
