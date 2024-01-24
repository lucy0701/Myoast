import { useEffect, useRef } from 'react';
import {iframeResizer} from 'iframe-resizer';

import styles from './index.module.css';
export default function CoupangBanner() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      iframeResizer({ checkOrigin: false }, iframe);
    }
  }, []);
  return (
    <iframe
      ref={iframeRef}
      className={styles.iframe}
      src="https://ads-partners.coupang.com/widgets.html?id=665416&template=carousel&trackingCode=AF7346840&subId=&width=400&height=90&tsource="
      width="350"
      height="90"
      referrerPolicy="unsafe-url"
    ></iframe>
  );
}
