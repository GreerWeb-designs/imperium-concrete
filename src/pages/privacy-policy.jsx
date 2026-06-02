// src/pages/PrivacyPolicy.jsx
import React from "react";
import Seo from "../components/Seo";

export default function PrivacyPolicy() {
  // TODO: Replace with Imperium Concrete contact info (or pull from your site config)
  const COMPANY_NAME = "Imperium Concrete";
  const CONTACT_EMAIL = "sales@imperiumconcrete.com"; // change if needed
  const CONTACT_PHONE = "(864) 447-6200"; // change if needed

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Seo
        title="Privacy Policy | Imperium Concrete"
        description="How Imperium Concrete collects, uses, and protects information submitted through our website."
        path="/privacy-policy"
      />
      <section className="mx-auto max-w-4xl px-5 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-600">
            Last updated: February 2026
          </p>
        </header>

        <div className="prose prose-slate max-w-none">
          <p>
            {COMPANY_NAME} values your privacy. This Privacy Policy explains how
            we collect, use, and protect your information when you visit our
            website or contact us regarding concrete services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide, including:</p>
          <ul>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Home address</li>
            <li>Project details related to concrete services</li>
          </ul>
          <p>
            This information is collected when you submit a contact form, request
            a quote, or otherwise reach out to us through our website.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use your information only for the following purposes:</p>
          <ul>
            <li>To contact you regarding your concrete project</li>
            <li>To provide estimates or respond to inquiries</li>
            <li>To communicate about scheduling or service-related matters</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>

          <h2>Data Protection</h2>
          <p>
            We take reasonable steps to protect your personal information from
            unauthorized access, disclosure, or misuse. However, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our website may use basic tools such as analytics or hosting services
            to help us operate and improve our site. These services may collect
            anonymous usage data but do not provide us with personally
            identifiable information beyond what you voluntarily submit.
          </p>

          <h2>Your Choices</h2>
          <p>
            You may request to review, update, or delete your personal
            information by contacting us directly.
          </p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, contact us:</p>
          <ul>
            <li>
              <strong>{COMPANY_NAME}</strong>
            </li>
            <li>
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`} className="underline">
                {CONTACT_PHONE}
              </a>
            </li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date.
          </p>
        </div>
      </section>
    </main>
  );
}
