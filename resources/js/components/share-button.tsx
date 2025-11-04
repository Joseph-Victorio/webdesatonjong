import { FaFacebook, FaWhatsapp , FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface ShareButtonsProps {
    title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
    const url = typeof window !== "undefined" ? window.location.href : "";

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " - " + url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    };

    const openShare = (shareUrl: string) => {
        window.open(shareUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="flex items-center gap-4 mt-4">
            <button
                onClick={() => openShare(shareLinks.facebook)}
                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                title="Bagikan ke Facebook"
            >
                <FaFacebook size={28} />
            </button>

            <button
                onClick={() => openShare(shareLinks.whatsapp)}
                className="text-green-600 hover:text-green-800 cursor-pointer"
                title="Bagikan ke WhatsApp"
            >
                <FaWhatsapp size={28} />
            </button>

            <button
                onClick={() => openShare(shareLinks.twitter)}
                className="text-black hover:text-black/70 cursor-pointer"
                title="Bagikan ke Twitter"
            >
                <FaXTwitter  size={28} />
            </button>

            <button
                onClick={() => openShare(shareLinks.telegram)}
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                title="Bagikan ke Telegram"
            >
                <FaTelegram size={28} />
            </button>
        </div>
    );
}
