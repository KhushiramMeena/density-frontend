import Image from "next/image";
import React from "react";

const Section12_footer = () => {
  return (
    <footer className="mt-4 border-gray-300  py-12 px-12 border-t">
      <p className="text-xl font-bold text-violet-700 flex justify-center">
        <Image width={60} height={60} alt="" src="/ahead-logo.png" />
      </p>
      <p className="text-xl font-bold text-violet-700 text-center">ahead</p>
      <div className="flex gap-8 items-center justify-center mt-5 font-semibold">
      
      {/* Address */}
      <div class="inline-container">
    <img src="https://img.icons8.com/stitch/50/address--v2.png" alt="address--v2" width="40" height="40" />
    <span>AugustraBe 26, 10117 Berlin</span>
</div>

{/* Mail */}

<div class="inline-container">
<img width="40" height="40" src="https://img.icons8.com/ios-filled/50/mail.png" alt="mail"/>
    <span>hi@ahead-app.com</span>
</div>
     

      </div>
      <div className="flex justify-center">
        <Image
          src="/appleStoreIcon.svg"
          alt="download applestore"
          width={150}
          height={150}
        />
      </div>
      <div className="text-center text-sm text-gray-500">
        &copy; Ahead App. All rights reserved.
      </div>
    </footer>
  );
};

export default Section12_footer;
