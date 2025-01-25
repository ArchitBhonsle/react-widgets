import { useRef, useState } from "react";

export type OtpInputProps = {
  length: number;
};
export default function OtpInput({ length }: OtpInputProps) {
  const [otp, setOtp] = useState<string>("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`OTP: ${otp}`);
        setTimeout(() => {
          inputRef.current?.focus();
          setOtp("");
          setFocused(true);
        }, 1);
      }}
    >
      <div
        className="flex gap-2 flex-row relative"
        onClick={() => {
          inputRef.current?.focus();
          setFocused(true);
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={otp}
          onChange={(e) =>
            allowEdit(e.target.value, length) &&
            setOtp(e.target.value.slice(0, length))
          }
          onBlur={() => {
            setFocused(false);
          }}
          className="w-0 h-0 absolute top-0 left-0 opacity-0"
        />
        {Array.from({ length }, (_, i) => (
          <div
            key={i}
            className="flex gap-2 flex-row items-center justify-center"
          >
            {i !== 0 && i % 3 === 0 && <div className="w-2 h-1 bg-blue-200" />}
            <div
              key={i}
              className={`rounded-md size-[4ch] flex justify-center items-center 
                    ${
                      shouldBeHighlighted(i, otp, length, focused)
                        ? "border-blue-500 border-2"
                        : "border-blue-200 border"
                    }`}
            >
              {otp[i]}
            </div>
          </div>
        ))}
        <button
          className=" disabled:bg-blue-200 bg-blue-700 text-white rounded-md px-4 h-[4ch]"
          disabled={otp.length < length}
        >
          Send
        </button>
      </div>
    </form>
  );
}

function allowEdit(otp: string, length: number) {
  return otp === "" || (otp.length <= length && otp.match(/^\d+$/));
}

function shouldBeHighlighted(
  i: number,
  otp: string,
  length: number,
  focused: boolean,
) {
  return (
    focused && (otp.length === length ? i === length - 1 : i === otp.length)
  );
}
