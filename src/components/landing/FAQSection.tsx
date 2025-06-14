
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does the AI know my tone?",
      answer: "PostArc analyzes your writing style from sample posts or inputs you provide, then adapts to match your unique voice and professional tone. The more you use it, the better it gets at capturing your style."
    },
    {
      question: "Can I edit the posts?",
      answer: "Absolutely! Every generated post is fully editable. You can modify, expand, or completely rewrite any part of the content. Think of PostArc as your writing assistant, not a replacement for your creativity."
    },
    {
      question: "What happens when I hit my limit?",
      answer: "When you reach your monthly post limit, you can either upgrade to a higher plan or wait until your limit resets the following month. Free users get 5 posts monthly, Pro users get 15, and Legend users enjoy unlimited posts."
    },
    {
      question: "Do you store my content?",
      answer: "We temporarily store your generated posts to improve our AI models, but we never share your content publicly. You can delete your posts from our system at any time, and we follow strict data privacy guidelines."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes! All paid plans can be canceled at any time. You'll continue to have access to your plan's features until the end of your current billing period, then you'll automatically move to the free plan."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about PostArc
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-200 rounded-2xl px-6 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#00FFC2] transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
