export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  url: string;
  appStoreUrl: string;
  features: {
    title: string;
    description: string;
  }[];
}

export const products: Product[] = [
  {
    id: "mouseboost",
    name: "MouseBoost",
    tagline: "30+ handy tools at your right-click. Boost your Mac productivity with a customizable context menu for everyone.",
    description: "MouseBoost is a powerful productivity tool that enhances your Mac's right-click menu with over 30 useful tools. Create files, access favorite folders, launch apps, and run custom scripts - all from your context menu.",
    icon: "/icons/mouseboost-icon.png",
    url: "/en/products/mouseboost/info",
    appStoreUrl: "https://apps.apple.com/app/id1551462255?mt=8",
    features: [
      {
        title: "Create Files",
        description: "Quickly create common files, support custom types and templates."
      },
      {
        title: "Favorite Folders",
        description: "One-click access to favorite folders, open with custom apps."
      },
      {
        title: "Favorite Apps",
        description: "Add frequently used apps to the right-click menu, open files/folders quickly."
      },
      {
        title: "Custom Scripts",
        description: "Support Shell and AppleScript, with built-in script examples."
      }
    ]
  },
  {
    id: "omnireader",
    name: "OmniReader",
    tagline: "Smart & Versatile eBook Reader, AI-powered, supports all major formats, and designed for efficiency.",
    description: "A Powerful AI-Enhanced Reading Experience. OmniReader is a feature-rich book reader designed for users who demand flexibility, efficiency, and intelligence in their reading experience. With broad format support, AI-powered assistance, and advanced customization options, it's the ultimate tool for reading and managing digital content.",
    icon: "/icons/omnireader-icon.png",
    url: "/en/products/omnireader/info",
    appStoreUrl: "https://apps.apple.com/app/id1510511137?mt=8",
    features: [
      {
        title: "AI Reading Assistant",
        description: "Powered by the full-version DeepSeek-R1 model, providing intelligent reading support. Users can also integrate their own AI models for a highly personalized experience."
      },
      {
        title: "Comprehensive Format Support",
        description: "Read EPUB, PDF, Kindle (MOBI, AZW3, PRC, TPZ, AZW, AZW4, AZS, AZL), CHM, RTF, DJVU, FB2, TXT, HTML, MHTML and more."
      },
      {
        title: "Advanced Search",
        description: "Search within a single page or across the entire document, with highlighted results for quick reference."
      },
      {
        title: "Annotations & Bookmarks",
        description: "Add highlights, notes, and bookmarks to keep track of important information."
      }
    ]
  },
  {
    id: "omnizip",
    name: "OmniZip",
    tagline: "A super decompression tool, supports the decompression of RAR, 7Z, ZIP, TAR, GZIP and other more than 100 formats of files. As long as the compressed package, there is nothing OmniZip can not decompress.",
    description: "OmniZip is a powerful file compression and extraction tool that supports over 100 different archive formats. Whether you're dealing with RAR, 7Z, ZIP, TAR, GZIP, or any other compressed file format, OmniZip has you covered.",
    icon: "/icons/omnizip-icon.png",
    url: "/en/products/omnizip/info",
    appStoreUrl: "https://apps.apple.com/app/id6446939321?mt=8",
    features: [
      {
        title: "Wide Format Support",
        description: "Supports over 100 different archive formats including RAR, 7Z, ZIP, TAR, GZIP and more."
      },
      {
        title: "Fast Extraction",
        description: "Quick and efficient extraction of compressed files with progress tracking."
      },
      {
        title: "Batch Processing",
        description: "Process multiple archives at once with batch extraction capabilities."
      },
      {
        title: "Secure Handling",
        description: "Safe and secure handling of compressed files with built-in virus scanning."
      }
    ]
  },
  {
    id: "omniconverter",
    name: "OmniConverter",
    tagline: "Transform your documents between PDF, EPUB, FB2, RTF, TXT, CHM, MOBI, AZW, and DJVU with lightning speed. Your complete e-book conversion solution.",
    description: "Your go-to e-book conversion tool, seamlessly transforming documents between multiple formats. Whether it's academic papers or novels, OmniConverter makes your reading experience uninterrupted across formats.",
    icon: "/icons/omniconverter-icon.png",
    url: "/en/products/omniconverter/info",
    appStoreUrl: "https://apps.apple.com/app/id6499086601?mt=8",
    features: [
      {
        title: "Multiple Format Support",
        description: "Convert between PDF, EPUB, FB2, RTF, TXT, CHM, MOBI, AZW, and DJVU formats."
      },
      {
        title: "Batch Conversion",
        description: "Convert multiple files at once to save time and effort."
      },
      {
        title: "Preserve Formatting",
        description: "Maintain original formatting and layout during conversion."
      },
      {
        title: "Custom Settings",
        description: "Adjust conversion settings to meet your specific needs."
      }
    ]
  },
  {
    id: "cognipdf",
    name: "CogniPDF X",
    tagline: "A powerful PDF reader with bookshelves, reading progress tracking, annotations, TTS, and immersive reading mode.",
    description: "CogniPDF X is a feature-rich PDF reader designed for both casual and professional users. With its intuitive interface and powerful features, it makes reading and managing PDF documents a breeze.",
    icon: "/icons/cognipdf-icon.png",
    url: "/en/products/cognipdf/info",
    appStoreUrl: "https://apps.apple.com/app/id6496689357?mt=8",
    features: [
      {
        title: "Smart Bookshelves",
        description: "Organize your PDFs with customizable bookshelves. Keep track of what you've read and what's next on your list."
      },
      {
        title: "Reading Progress Tracking",
        description: "Automatically remembers where you left off. Never lose your place in a document again."
      },
      {
        title: "Rich Annotations",
        description: "Highlight, underline, and add notes to your documents. Make your PDFs truly interactive."
      },
      {
        title: "Text-to-Speech",
        description: "Listen to your documents with high-quality text-to-speech functionality."
      }
    ]
  },
  {
    id: "textreader",
    name: "Ark Reader",
    tagline: "A simple and powerful TXT/EPUB reader with bookshelves, reading progress tracking, themes, TTS, and immersive reading mode.",
    description: "Ark Reader is a versatile text reader that combines simplicity with powerful features. Perfect for reading plain text files and EPUB books with a focus on user experience.",
    icon: "/icons/textreader-icon.png",
    url: "/en/products/textreader/info",
    appStoreUrl: "https://apps.apple.com/app/id1669005649?mt=8",
    features: [
      {
        title: "Smart Bookshelves",
        description: "Organize your books with customizable bookshelves. Keep track of what you've read and what's next on your list."
      },
      {
        title: "Reading Progress Tracking",
        description: "Automatically remembers where you left off. Never lose your place in a document again."
      },
      {
        title: "Smart Encoding Support",
        description: "Intelligent recognition of common text encodings ensures your files are always displayed correctly."
      },
      {
        title: "Customizable Themes",
        description: "Choose from multiple themes or create your own for the perfect reading experience."
      }
    ]
  }
]; 