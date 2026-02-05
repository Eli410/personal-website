import React, { useState } from "react";

const RECIPIENT = "ziyangc410@gmail.com";

export default function ContactForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyRecipient = async () => {
    try {
      await navigator.clipboard.writeText(RECIPIENT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(title);
    const bodyEncoded = encodeURIComponent(body);
    const mailto = `mailto:${RECIPIENT}?subject=${subject}&body=${bodyEncoded}`;
    window.open(mailto, "_blank");
  };

  return (
    <form
      onSubmit={handleSend}
      className="m-6 flex w-full max-w-md flex-col gap-4"
    >
      <div className="flex items-center gap-2">
        <span className="shrink-0 text-gray-300">To:</span>
        <input
          type="text"
          readOnly
          value={RECIPIENT}
          aria-label="Recipient email"
          className="flex-1 rounded-lg border border-[#38bdf8]/30 bg-[#1e293b] px-4 py-3 text-gray-300 placeholder-gray-500 outline-none transition focus:border-[#38bdf8]/60 focus:ring-1 focus:ring-[#38bdf8]/40 cursor-default"
        />
        <button
          type="button"
          onClick={handleCopyRecipient}
          className="shrink-0 rounded-lg border border-[#38bdf8]/30 bg-[#1e293b] px-4 py-3 text-gray-300 transition hover:bg-[#334155] hover:border-[#38bdf8]/60 focus:outline-none focus:ring-1 focus:ring-[#38bdf8]/40"
          title="Copy email"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <input
        type="text"
        placeholder="Subject"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="rounded-lg border border-[#38bdf8]/30 bg-[#1e293b] px-4 py-3 text-gray-300 placeholder-gray-500 outline-none transition focus:border-[#38bdf8]/60 focus:ring-1 focus:ring-[#38bdf8]/40"
      />
      <textarea
        placeholder="Message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
        className="rounded-lg border border-[#38bdf8]/30 bg-[#1e293b] px-4 py-3 text-gray-300 placeholder-gray-500 outline-none transition focus:border-[#38bdf8]/60 focus:ring-1 focus:ring-[#38bdf8]/40 resize-none"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-lg border-none bg-[#1e293b] px-4 py-3 font-semibold text-white shadow-lg shadow-[#1e293b]/20 transition-all duration-300 hover:bg-[#334155]"
      >
        Send email
      </button>
    </form>
  );
}
