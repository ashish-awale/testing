// Create Branding.js component to display branding page

import Image from 'next/image';

const Branding = () => {
  return (
    <>
      <div className="pageStyle">

        <h2 className="topText">FANEX</h2>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >

          <div className="leftSideText">
            <h3>  DIGITAL FAN <span>ENGAGEMENT</span> PARTNER</h3>
          </div>

          {/* Define border line */}
          <div className='borderLine' />

          {/* Define Tech mahindra logo */}
          <div className="logo">
            <Image src="/Logo.png" alt="logo" width="160" height="60" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Branding;
