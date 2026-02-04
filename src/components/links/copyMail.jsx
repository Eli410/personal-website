import React, { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const email = "ziyangc410@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="m-6 flex items-center gap-3">
      <h1 className="text-lg font-medium text-zinc-300">{email}</h1>
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 cursor-pointer font-semibold rounded-lg border-none px-3 py-2 text-sm bg-[#500000] hover:bg-[#732d2d] text-white transition-all duration-300 shadow-lg shadow-[#500000]/20"
      >
        {copied ? (
          <>
            <FaCheck className="text-[#3eb489]" />
            Copied!
          </>
        ) : (
          <>
            <FaRegCopy className="text-zinc-300" />
            Copy
          </>
        )}
      </button>
    </div>
  );
}
