"use client";

import Card from "@/components/Card";
import OtpInput from "@/components/Otp/OtpInput";

export default function Home() {
  return (
    <div className="flex gap-5 flex-col">
      <Card name="OTP Input">
        <OtpInput length={6} />
      </Card>
    </div>
  );
}
