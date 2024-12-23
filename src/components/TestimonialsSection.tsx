import TestimonialCard from "@/components/Testimonials/TestimonialCard";

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager at TechCorp",
    content:
      "Michael's work on our project was exceptional. His attention to detail and problem-solving skills made a significant impact on the success of our application.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer at InnoSoft",
    content:
      "Working with Michael was a pleasure. His ability to quickly grasp complex concepts and implement elegant solutions is impressive. He's a valuable asset to any team.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Alex Johnson",
    role: "Startup Founder",
    content:
      "Michael's contributions to our startup were crucial. His full-stack skills and dedication helped us launch our MVP ahead of schedule. I highly recommend him.",
    avatar: "/placeholder.svg",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
