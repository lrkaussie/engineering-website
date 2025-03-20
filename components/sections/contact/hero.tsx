export function ContactHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-primary to-primary-dark text-accent py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-secondary">
            Get in touch with our team to discuss your next project
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/50" />
    </section>
  )
} 