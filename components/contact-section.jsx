import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-mono mb-2">What's Next?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question, want to collaborate on a project,
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <Button size="lg" asChild>
            <a href="mailto:hello@example.com">
              <Mail className="mr-2 w-4 h-4" />
              Say Hello
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
