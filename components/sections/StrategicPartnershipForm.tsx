"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Loader2,
  ShieldCheck,
} from "lucide-react";

const events = [
  "Global AI GRCS Summit 2026",
  "Tokenomics World 2027",
  "2nd Global AI GRCS Summit 2027",
  "Nexus 360: The Autonomous Enterprise Summit",
  "CyberFortress Asia 2027",
  "The White Coat Summit 2027",
  "Industry X 2027",
  "TradeTech World 2027",
  "Multiple events",
  "Open to recommendations",
];

const partnershipInterests = [
  "Title / Presenting Partner",
  "Strategic Partner",
  "Platinum Partner",
  "Gold Partner",
  "Silver Partner",
  "Technology Partner",
  "Knowledge / Intelligence Partner",
  "Exhibition Partner",
  "Executive Roundtable Partner",
  "Other",
];

const investmentRanges = [
  "Under INR 2 lakh",
  "INR 2–5 lakh",
  "INR 5–10 lakh",
  "INR 10–20 lakh",
  "INR 20–50 lakh",
  "Above INR 50 lakh",
  "To be discussed",
];

const inputClass =
  "w-full h-[56px] rounded-xl border border-black/10 bg-white px-4 text-[15px] text-[#111] outline-none transition-all placeholder:text-black/35 hover:border-black/20 focus:border-black focus:ring-4 focus:ring-black/[0.04]";

const labelClass =
  "mb-2.5 block text-[13px] font-semibold tracking-[-0.01em] text-[#171717]";

export default function StrategicPartnershipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    designation: "",
    phone: "",
    country: "",
    event: "",
    partnershipInterest: "",
    investment: "",
    objectives: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please accept the consent before submitting.");
      return;
    }

    setLoading(true);

    try {
      // Replace this with your API endpoint.
      //
      // Example:
      //
      // const response = await fetch("/api/partnership-enquiry", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitted(true);
    } catch (error) {
      console.error("Partnership enquiry error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="relative overflow-hidden bg-[#f5f4f0] px-5 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white px-6 py-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.08)] md:px-16 md:py-24">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-black/[0.025]" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-black/[0.025]" />

            <div className="relative mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white">
              <Check size={28} strokeWidth={2} />
            </div>

            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-black/45">
              Partnership enquiry received
            </p>

            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-5xl">
              Thank you for your interest.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-black/55 md:text-base">
              Our partnerships team will review your requirements and connect
              with you to explore the most relevant opportunities.
            </p>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  company: "",
                  designation: "",
                  phone: "",
                  country: "",
                  event: "",
                  partnershipInterest: "",
                  investment: "",
                  objectives: "",
                  consent: false,
                });
              }}
              className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="partnership-enquiry"
      className="relative overflow-hidden bg-[#f5f4f0] px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-28"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-white/60 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-black" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-black/50">
              Partner with us
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-[#111] md:text-6xl lg:text-[72px]">
            LET&apos;S CREATE SOMETHING{" "}
            <span className="text-black/35">EXTRAORDINARY</span> TOGETHER.
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-7 text-black/55 md:text-lg md:leading-8">
            Tell us about your business objectives. Our partnerships team will
            explore the right opportunities across our global event portfolio.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <div className="border-b border-black/[0.08] p-6 md:p-10 lg:p-12">
              <div className="mb-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                  01
                </p>

                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                  Tell us about yourself
                </h2>
              </div>

              <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full name <span className="text-black/40">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Official business email{" "}
                    <span className="text-black/40">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={inputClass}
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company name <span className="text-black/40">*</span>
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company / organisation"
                    className={inputClass}
                  />
                </div>

                {/* Designation */}
                <div>
                  <label htmlFor="designation" className={labelClass}>
                    Designation <span className="text-black/40">*</span>
                  </label>

                  <input
                    id="designation"
                    name="designation"
                    type="text"
                    required
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Your designation"
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone number{" "}
                    <span className="text-black/40">
                      * &nbsp;(include country code)
                    </span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className={labelClass}>
                    Country <span className="text-black/40">*</span>
                  </label>

                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Partnership Details */}
            <div className="border-b border-black/[0.08] p-6 md:p-10 lg:p-12">
              <div className="mb-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                  02
                </p>

                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                  Partnership opportunity
                </h2>
              </div>

              <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
                {/* Event */}
                <SelectField
                  label="Event of interest"
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                  required
                  options={events}
                  placeholder="Select an event"
                />

                {/* Partnership */}
                <SelectField
                  label="Partnership interest"
                  name="partnershipInterest"
                  value={formData.partnershipInterest}
                  onChange={handleChange}
                  required
                  options={partnershipInterests}
                  placeholder="Select partnership type"
                />

                {/* Investment */}
                <div className="md:col-span-2">
                  <SelectField
                    label="Estimated partnership investment"
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    options={investmentRanges}
                    placeholder="Select investment range"
                  />
                </div>
              </div>
            </div>

            {/* Objectives */}
            <div className="border-b border-black/[0.08] p-6 md:p-10 lg:p-12">
              <div className="mb-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                  03
                </p>

                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                  Your objectives
                </h2>

                <p className="mt-2 text-sm text-black/45">
                  Help us understand what a successful partnership looks like
                  for your business.
                </p>
              </div>

              <div>
                <label htmlFor="objectives" className={labelClass}>
                  What are your primary business objectives?
                </label>

                <textarea
                  id="objectives"
                  name="objectives"
                  rows={6}
                  value={formData.objectives}
                  onChange={handleChange}
                  placeholder="Tell us about your target audience, lead generation goals, brand positioning, market expansion plans and other objectives..."
                  className="w-full resize-none rounded-xl border border-black/10 bg-white p-4 text-[15px] leading-7 text-[#111] outline-none transition-all placeholder:text-black/35 hover:border-black/20 focus:border-black focus:ring-4 focus:ring-black/[0.04]"
                />
              </div>
            </div>

            {/* Consent + Submit */}
            <div className="p-6 md:p-10 lg:p-12">
              <label className="flex cursor-pointer items-start gap-3">
                <span className="relative mt-0.5 flex-shrink-0">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        consent: e.target.checked,
                      }))
                    }
                    className="peer sr-only"
                  />

                  <span className="flex h-5 w-5 items-center justify-center rounded-md border border-black/20 bg-white transition peer-checked:border-black peer-checked:bg-black">
                    <Check
                      size={13}
                      className="text-white opacity-0 transition peer-checked:opacity-100"
                    />
                  </span>
                </span>

                <span className="text-[13px] leading-5 text-black/55">
                  I agree to be contacted regarding relevant partnership
                  opportunities and have read the{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    className="font-semibold text-black underline underline-offset-2"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-[12px] text-black/40">
                  <ShieldCheck size={16} />
                  <span>Your information is kept confidential.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#111] px-7 text-sm font-bold uppercase tracking-[0.08em] text-white transition-all hover:bg-black hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      REQUEST A PARTNERSHIP PROPOSAL
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Bottom note */}
        <p className="mt-6 text-center text-[11px] uppercase tracking-[0.16em] text-black/30">
          Global Business Summits · Strategic Partnerships
        </p>
      </div>
    </section>
  );
}

/* ----------------------------------------
   Select Field
----------------------------------------- */

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label} {required && <span className="text-black/40">*</span>}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`${inputClass} appearance-none pr-12 ${
            !value ? "text-black/35" : "text-black"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/40"
        />
      </div>
    </div>
  );
}