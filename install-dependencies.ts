// This script shows the commands to install all required dependencies
// for the Memory Game project with TypeScript typings

console.log("=== Memory Game Dependencies Installation Guide ===\n");

// Core dependencies
console.log("Step 1: Install core dependencies");
console.log("npm install framer-motion lucide-react sonner\n");

// TypeScript types
console.log("Step 2: Install TypeScript types (as dev dependencies)");
console.log("npm install -D typescript @types/react @types/react-dom\n");

// shadcn/ui dependencies (for Button, Card components)
console.log("Step 3: Install shadcn/ui dependencies");
console.log("npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge\n");

// If you want to set up shadcn/ui properly
console.log("Optional: For a complete shadcn/ui setup, follow these steps:");
console.log("1. Install shadcn/ui CLI: npm install -D @shadcn/ui");
console.log("2. Initialize shadcn/ui: npx shadcn init");
console.log("3. Add components: npx shadcn add button card\n");

console.log("Alternative: If you just want a minimal setup without shadcn/ui:");
console.log("npm install react react-dom framer-motion lucide-react sonner");
console.log("npm install -D typescript @types/react @types/react-dom\n");

console.log("Then you'll need to create your own Button and Card components or use alternatives.");