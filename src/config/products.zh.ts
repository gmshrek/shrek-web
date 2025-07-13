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
    name: "右键助手-MouseBoost",
    tagline: "30+ 实用工具尽在右键菜单。为每个人提供可自定义的上下文菜单，提升您的 Mac 生产力。",
    description: "MouseBoost 是一款强大的生产力工具，为您的 Mac 右键菜单增加了 30 多个实用工具。创建文件、访问收藏文件夹、启动应用、运行自定义脚本 - 一切尽在您的上下文菜单中。",
    icon: "/icons/mouseboost-icon.png",
    url: "/zh/products/mouseboost/info",
    appStoreUrl: "https://apps.apple.com/app/id1551462255?mt=8",
    features: [
      {
        title: "创建文件",
        description: "快速创建常用文件，支持自定义类型和模板。"
      },
      {
        title: "收藏文件夹",
        description: "一键访问收藏的文件夹，使用自定义应用打开。"
      },
      {
        title: "收藏应用",
        description: "将常用应用添加到右键菜单，快速打开文件/文件夹。"
      },
      {
        title: "自定义脚本",
        description: "支持 Shell 和 AppleScript，内置脚本示例。"
      }
    ]
  },
  {
    id: "omnireader",
    name: "OmniReader",
    tagline: "智能多功能电子书阅读器，AI 驱动，支持所有主流格式，专为高效阅读而设计。",
    description: "强大的 AI 增强阅读体验。OmniReader 是一款功能丰富的电子书阅读器，专为追求灵活性、效率和智能阅读体验的用户设计。凭借广泛的格式支持、AI 驱动的辅助功能和高级自定义选项，它是阅读和管理数字内容的终极工具。",
    icon: "/icons/omnireader-icon.png",
    url: "/zh/products/omnireader/info",
    appStoreUrl: "https://apps.apple.com/app/id1510511137?mt=8",
    features: [
      {
        title: "AI 阅读助手",
        description: "由完整版 DeepSeek-R1 模型驱动，提供智能阅读支持。用户还可以集成自己的 AI 模型，获得高度个性化的体验。"
      },
      {
        title: "全面的格式支持",
        description: "支持阅读 EPUB、PDF、Kindle（MOBI、AZW3、PRC、TPZ、AZW、AZW4、AZS、AZL）、CHM、RTF、DJVU、FB2、TXT、HTML、MHTML 等格式。"
      },
      {
        title: "高级搜索",
        description: "在单页或整个文档中搜索，高亮显示结果以便快速参考。"
      },
      {
        title: "注释与书签",
        description: "添加高亮、笔记和书签，轻松追踪重要信息。"
      }
    ]
  },
  {
    id: "omnizip",
    name: "OmniZip",
    tagline: "超级解压缩工具，支持 RAR、7Z、ZIP、TAR、GZIP 等 100 多种格式文件的解压。只要是压缩包，没有 OmniZip 解压不了的。",
    description: "OmniZip 是一款强大的文件压缩和解压工具，支持 100 多种不同的压缩格式。无论您处理的是 RAR、7Z、ZIP、TAR、GZIP 还是其他压缩文件格式，OmniZip 都能满足您的需求。",
    icon: "/icons/omnizip-icon.png",
    url: "/zh/products/omnizip/info",
    appStoreUrl: "https://apps.apple.com/app/id6446939321?mt=8",
    features: [
      {
        title: "广泛的格式支持",
        description: "支持 100 多种不同的压缩格式，包括 RAR、7Z、ZIP、TAR、GZIP 等。"
      },
      {
        title: "快速解压",
        description: "快速高效地解压文件，并跟踪解压进度。"
      },
      {
        title: "批量处理",
        description: "支持批量解压多个压缩文件。"
      },
      {
        title: "安全处理",
        description: "安全可靠地处理压缩文件，内置病毒扫描功能。"
      }
    ]
  },
  {
    id: "omniconverter",
    name: "OmniConverter",
    tagline: "以闪电般的速度在 PDF、EPUB、FB2、RTF、TXT、CHM、MOBI、AZW 和 DJVU 之间转换您的文档。您的完整电子书转换解决方案。",
    description: "您的首选电子书转换工具，无缝转换多种格式的文档。无论是学术论文还是小说，OmniConverter 都能让您的阅读体验在不同格式之间保持连贯。",
    icon: "/icons/omniconverter-icon.png",
    url: "/zh/products/omniconverter/info",
    appStoreUrl: "https://apps.apple.com/app/id6499086601?mt=8",
    features: [
      {
        title: "多种格式支持",
        description: "在 PDF、EPUB、FB2、RTF、TXT、CHM、MOBI、AZW 和 DJVU 格式之间转换。"
      },
      {
        title: "批量转换",
        description: "一次转换多个文件，节省时间和精力。"
      },
      {
        title: "保持格式",
        description: "在转换过程中保持原始格式和布局。"
      },
      {
        title: "自定义设置",
        description: "调整转换设置以满足您的特定需求。"
      }
    ]
  },
  {
    id: "cognipdf",
    name: "CogniPDF X",
    tagline: "一款功能强大的 PDF 阅读器，具有书架、阅读进度跟踪、注释、主题、文字转语音和沉浸式阅读模式。",
    description: "CogniPDF X 是一款功能丰富的 PDF 阅读器，专为普通用户和专业用户设计。凭借其直观的界面和强大的功能，让阅读和管理 PDF 文档变得轻松愉快。",
    icon: "/icons/cognipdf-icon.png",
    url: "/zh/products/cognipdf/info",
    appStoreUrl: "https://apps.apple.com/app/id6496689357?mt=8",
    features: [
      {
        title: "智能书架",
        description: "使用可自定义的书架组织您的 PDF 文件。轻松追踪已读内容和待读列表。"
      },
      {
        title: "阅读进度追踪",
        description: "自动记住您的阅读位置。再也不会在文档中迷失方向。"
      },
      {
        title: "丰富注释",
        description: "高亮、下划线和添加笔记到您的文档中。让您的 PDF 真正具有交互性。"
      },
      {
        title: "文字转语音",
        description: "通过高质量的文字转语音功能，聆听您的文档内容。"
      }
    ]
  },
  {
    id: "textreader",
    name: "Ark Reader",
    tagline: "一款简单而强大的 TXT/EPUB 阅读器，具有书架、阅读进度跟踪、主题、文字转语音和沉浸式阅读模式。",
    description: "Ark Reader 是一款多功能文本阅读器，将简单性与强大功能完美结合。专注于用户体验，是阅读纯文本文件和 EPUB 电子书的理想选择。",
    icon: "/icons/textreader-icon.png",
    url: "/zh/products/textreader/info",
    appStoreUrl: "https://apps.apple.com/app/id1669005649?mt=8",
    features: [
      {
        title: "智能书架",
        description: "使用可自定义的书架组织您的书籍。轻松追踪已读内容和待读书单。"
      },
      {
        title: "阅读进度追踪",
        description: "自动记住您的阅读位置。再也不会在文档中迷失方向。"
      },
      {
        title: "智能编码支持",
        description: "智能识别常见文本编码，确保您的文件始终正确显示。"
      },
      {
        title: "自定义主题",
        description: "选择多种主题或创建自己的主题，获得完美的阅读体验。"
      }
    ]
  }
]; 