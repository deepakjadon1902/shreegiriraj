import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    location: 'Delhi, India',
    rating: 5,
    text: 'A truly divine experience! The rooms were clean and comfortable, and the staff treated us like family. The location near Prem Mandir made our pilgrimage so convenient. Highly recommended!',
  },
  {
    name: 'Priya Patel',
    location: 'Mumbai, India',
    rating: 5,
    text: 'We stayed here during Janmashtami and it was magical. The peaceful environment helped us connect deeply with our spiritual practice. The 24/7 service was exceptional.',
  },
  {
    name: 'Amit Kumar',
    location: 'Kolkata, India',
    rating: 5,
    text: 'Excellent hospitality in the heart of Vrindavan. The guest house is well-maintained and the staff goes above and beyond to help. Will definitely visit again!',
  },
  {
    name: 'Sunita Devi',
    location: 'Jaipur, India',
    rating: 5,
    text: 'Our family of 8 stayed comfortably in their multi-occupancy rooms. The spiritual atmosphere and proximity to temples made our trip truly memorable. Radhe Radhe!',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
            प्रशंसापत्र
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            हमारे अतिथियों की अनुभूतियाँ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-spiritual-yellow to-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg">
            Hear from the devotees who have experienced our hospitality during their spiritual journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-sm card-hover relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-spiritual-yellow/30" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-spiritual-yellow text-spiritual-yellow"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-serif text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
