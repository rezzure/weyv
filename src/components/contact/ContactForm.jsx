import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const projectTypes = [
  "Corporate Interior",
  "Commercial Interior",
  "Retail Interior",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under ₹5 Lakh",
  "₹5 – 15 Lakh",
  "₹15 – 40 Lakh",
  "₹40 Lakh+",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.message.trim()) next.message = "Tell us a little about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-soft px-8 py-16 text-center">
        <CheckCircle2 size={44} className="text-primary" strokeWidth={1.5} />
        <h3 className="font-display text-2xl">Message Sent</h3>
        <p className="body-md max-w-sm">
          Thank you, {form.name.split(" ")[0]}. A WEYV designer will reach out
          within one business day to talk through your project.
        </p>
        <button
          onClick={() => {
            setForm(initialForm);
            setStatus("idle");
          }}
          className="mt-2 text-sm font-medium text-primary underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full min-h-[48px] rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  const labelClass = "mb-2 block text-sm font-medium text-ink";
  const errorClass = "mt-1.5 text-xs text-red-500";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">Name</label>
        <input id="name" className={inputClass} value={form.name} onChange={update("name")} placeholder="Your full name" />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" type="email" className={inputClass} value={form.email} onChange={update("email")} placeholder="you@email.com" />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">Phone</label>
        <input id="phone" className={inputClass} value={form.phone} onChange={update("phone")} placeholder="+91 00000 00000" />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>
      <div>
        <label className={labelClass} htmlFor="company">Company (optional)</label>
        <input id="company" className={inputClass} value={form.company} onChange={update("company")} placeholder="Company name" />
      </div>
      <div>
        <label className={labelClass} htmlFor="projectType">Project Type</label>
        <select id="projectType" className={inputClass} value={form.projectType} onChange={update("projectType")}>
          <option value="">Select project type</option>
          {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="budget">Budget Range</label>
        <select id="budget" className={inputClass} value={form.budget} onChange={update("budget")}>
          <option value="">Select budget range</option>
          {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          className={inputClass}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your space and what you're hoping to achieve."
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary-dark disabled:opacity-70"
        >
          {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
