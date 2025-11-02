import { Config } from "@measured/puck";

// Define the component types
export type Props = {
  HeadingBlock: {
    title: string;
    level: "1" | "2" | "3";
  };
  TextBlock: {
    text: string;
    size: "small" | "medium" | "large";
  };
  ButtonBlock: {
    label: string;
    href: string;
    variant: "primary" | "secondary";
  };
  HeroBlock: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  ColumnsBlock: {
    columns: "1" | "2" | "3" | "4";
  };
};

// Puck configuration
export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
        level: {
          type: "select",
          options: [
            { label: "Heading 1", value: "1" },
            { label: "Heading 2", value: "2" },
            { label: "Heading 3", value: "3" },
          ],
        },
      },
      defaultProps: {
        title: "Heading",
        level: "1",
      },
      render: ({ title, level }) => {
        const Tag = `h${level}` as keyof JSX.IntrinsicElements;
        const sizeClasses = {
          "1": "text-5xl font-bold",
          "2": "text-4xl font-semibold",
          "3": "text-3xl font-medium",
        };
        return (
          <Tag className={`${sizeClasses[level]} mb-4`}>
            {title}
          </Tag>
        );
      },
    },
    TextBlock: {
      fields: {
        text: { type: "textarea" },
        size: {
          type: "select",
          options: [
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" },
          ],
        },
      },
      defaultProps: {
        text: "This is some text content.",
        size: "medium",
      },
      render: ({ text, size }) => {
        const sizeClasses = {
          small: "text-sm",
          medium: "text-base",
          large: "text-lg",
        };
        return (
          <p className={`${sizeClasses[size]} mb-4 whitespace-pre-wrap`}>
            {text}
          </p>
        );
      },
    },
    ButtonBlock: {
      fields: {
        label: { type: "text" },
        href: { type: "text" },
        variant: {
          type: "radio",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
      },
      defaultProps: {
        label: "Click me",
        href: "#",
        variant: "primary",
      },
      render: ({ label, href, variant }) => {
        const variantClasses = {
          primary: "bg-blue-600 text-white hover:bg-blue-700",
          secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        };
        return (
          <a
            href={href}
            className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors ${variantClasses[variant]}`}
          >
            {label}
          </a>
        );
      },
    },
    HeroBlock: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        backgroundImage: { type: "text" },
      },
      defaultProps: {
        title: "Welcome to Puck",
        subtitle: "Build amazing pages with drag and drop",
        backgroundImage: "",
      },
      render: ({ title, subtitle, backgroundImage }) => {
        // Validate and sanitize background image URL
        const isValidUrl = (url: string | undefined) => {
          if (!url) return false;
          try {
            const urlObj = new URL(url);
            return urlObj.protocol === "http:" || urlObj.protocol === "https:";
          } catch {
            return false;
          }
        };

        const safeBackgroundImage = isValidUrl(backgroundImage)
          ? backgroundImage
          : "";

        return (
          <div
            className="relative py-20 px-8 text-center rounded-lg mb-4"
            style={{
              backgroundImage: safeBackgroundImage
                ? `url(${safeBackgroundImage})`
                : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {subtitle}
              </p>
            </div>
          </div>
        );
      },
    },
    ColumnsBlock: {
      fields: {
        columns: {
          type: "select",
          options: [
            { label: "1 Column", value: "1" },
            { label: "2 Columns", value: "2" },
            { label: "3 Columns", value: "3" },
            { label: "4 Columns", value: "4" },
          ],
        },
      },
      defaultProps: {
        columns: "2",
      },
      render: ({ columns }) => {
        const columnClasses = {
          "1": "grid-cols-1",
          "2": "grid-cols-2",
          "3": "grid-cols-3",
          "4": "grid-cols-4",
        };
        const numColumns = parseInt(columns);
        return (
          <div className={`grid ${columnClasses[columns]} gap-4 mb-4`}>
            {Array.from({ length: numColumns }).map((_, i) => (
              <div key={i} className="border border-gray-300 p-4 rounded">
                <p className="text-gray-600">Column {i + 1}</p>
                <p className="text-sm text-gray-500">Drop content here</p>
              </div>
            ))}
          </div>
        );
      },
    },
  },
};

export default config;
