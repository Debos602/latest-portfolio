import type { ReactNode } from 'react';

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-200">
      {children}

      {/* WhatsApp Floating Button - Bottom Right Corner */}
      <a 
        href="https://wa.me/880184491602" 
        target="_blank" 
        rel="noopener" 
        aria-label="WhatsApp Chat"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-black hover:bg-gray-900 text-white rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.025 0-2.02.321-2.852.923L6.731 3.847 9.9 10.694c.607.786.954 1.742.954 2.76 0 2.965-2.41 5.375-5.375 5.375-1.018 0-1.974-.347-2.76-.954L3.847 6.731l6.847 3.169c.786.607 1.742.954 2.76.954 2.965 0 5.375-2.41 5.375-5.375 0-1.018-.347-1.974-.954-2.76" fill="currentColor" />
        </svg>
        <span className="text-sm font-medium">Ask Debos Das</span>
      </a>
    </div>
  );
}