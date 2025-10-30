
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          About Aide
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Aide is your friendly AI assistant, designed to help you with a variety of tasks, from writing and research to productivity and content generation. Our mission is to make AI accessible and useful for everyone.
        </p>
      </div>
    </div>
  );
}
