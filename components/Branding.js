// Create Branding.js component to display branding page

import Image from 'next/image';

const Branding = () => {
  return (
    <>
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

        <div className='borderLine' />

        <div className="logo">
          <Image src="/Logo.png" alt="logo" width="160" height="60" />
        </div>

      </div>
    </>
  );
};

export default Branding;
