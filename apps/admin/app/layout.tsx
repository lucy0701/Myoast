// import { ReactNode } from 'react';
// import '../styles/globals.css';
// import RecoilRootProvider from '@/components/layout/RecoilRootProvider';
// import Main from '@/components/layout/Main';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang='en'>
//       <body>
//         <RecoilRootProvider>
//           <Main>{children}</Main>
//         </RecoilRootProvider>
//       </body>
//     </html>
//   );
// }

import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '../styles/globals.css';
import RecoilRootProvider from '@/components/layout/RecoilRootProvider';
import Navigation from '@/components/layout/Navigation/Index';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang='en'>
    <body>
      <RecoilRootProvider>
        <AntdRegistry>
          <Navigation>{children}</Navigation>
        </AntdRegistry>
      </RecoilRootProvider>
    </body>
  </html>
);

export default RootLayout;
