import { Phone } from "lucide-react";
import { companyInfo } from "../../data/companyInfo";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.858.505 3.6 1.383 5.093L2 22l5.062-1.361a9.958 9.958 0 0 0 4.942 1.323h.004c5.518 0 10.004-4.486 10.004-10.004S17.522 2 12.004 2Zm0 18.09h-.003a8.075 8.075 0 0 1-4.116-1.128l-.295-.175-3.005.808.802-2.928-.192-.3a8.06 8.06 0 0 1-1.24-4.363c0-4.462 3.63-8.092 8.093-8.092 2.163 0 4.196.842 5.724 2.372a8.037 8.037 0 0 1 2.367 5.727c0 4.462-3.63 8.079-8.135 8.079Z" />
  </svg>
);

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <a
        href={`tel:${companyInfo.phoneHref}`}
        aria-label="Call WEYV"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lift transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14"
      >
        <Phone size={20} />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 hidden sm:block">
          Call us
        </span>
      </a>
      <a
        href={`https://wa.me/${companyInfo.whatsapp.replace("+", "")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 hover:scale-105 sm:h-14 sm:w-14"
      >
        <WhatsAppIcon />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 hidden sm:block">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
