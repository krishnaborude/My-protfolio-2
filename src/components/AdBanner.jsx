import React, { useEffect, useRef } from 'react'

const AdBanner = ({ 
  adSlot, 
  adFormat = 'auto', 
  fullWidthResponsive = 'true',
  style = { display: 'block' },
  className = ''
}) => {
  const adRef = useRef(null)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // Prevent duplicate push in React strict mode or re-renders
        if (adRef.current && !adRef.current.getAttribute('data-adsbygoogle-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({})
        }
      }
    } catch (err) {
      console.error('AdSense ad error:', err)
    }
  }, [])

  return (
    <div className={`container ad-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-2531428003790978"
        {...(adSlot ? { 'data-ad-slot': adSlot } : {})}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  )
}

export default AdBanner
