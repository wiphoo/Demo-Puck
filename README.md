# Demo-Puck

A demonstration of the [Puck Editor](https://github.com/measuredco/puck) integrated with Next.js. This project showcases how to build a visual page editor using Puck's drag-and-drop component system.

## Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/b7d17a17-3c28-47d7-9a0a-287e34e1eeb8)

### Puck Editor
![Editor Page](https://github.com/user-attachments/assets/4be5b6b5-ae11-4ead-9dd5-efb768c640c2)

## Features

- ✨ **Visual Editor**: Drag-and-drop interface for building pages
- 🧩 **Custom Components**: Pre-built components including:
  - Hero Block - Eye-catching hero sections with customizable backgrounds
  - Heading Block - Multiple heading levels (H1, H2, H3)
  - Text Block - Configurable text content with size options
  - Button Block - Call-to-action buttons with primary/secondary variants
  - Columns Block - Multi-column layouts
- 📱 **Responsive Preview**: Test your designs at different viewport sizes
- 🎨 **Tailwind CSS**: Styled with Tailwind for easy customization
- ⚡ **Next.js 15**: Built with the latest Next.js features

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wiphoo/Demo-Puck.git
cd Demo-Puck
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Usage

1. Navigate to the home page at `http://localhost:3000`
2. Click the **"Open Editor"** button to access the Puck editor
3. Drag components from the left sidebar onto the canvas
4. Click on components to edit their properties in the right sidebar
5. Use the toolbar to:
   - Toggle sidebars
   - Undo/Redo changes
   - Switch viewport sizes
   - Publish your page

## Project Structure

```
Demo-Puck/
├── app/
│   ├── editor/
│   │   └── page.tsx          # Puck editor page
│   ├── puck/
│   │   └── config.tsx         # Puck component configuration
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── public/                    # Static assets
├── package.json               # Dependencies
└── README.md                  # This file
```

## Customization

### Adding New Components

Edit `app/puck/config.tsx` to add new components:

```typescript
export const config: Config<Props> = {
  components: {
    YourComponent: {
      fields: {
        // Define your fields here
      },
      defaultProps: {
        // Set default values
      },
      render: ({ ...props }) => {
        // Your component JSX
      },
    },
  },
};
```

### Styling

This project uses Tailwind CSS. Modify `tailwind.config.ts` to customize the design system.

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [Puck](https://github.com/measuredco/puck) - Visual editor
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Learn More

- [Puck Documentation](https://puck.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available under the [MIT License](LICENSE).