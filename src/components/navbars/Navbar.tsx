// Define the props interface
interface NavbarProps {
    children: React.ReactNode;
  }
  
  // Define the Navbar component
  export const Navbar = ({ children }: NavbarProps) => {
    return (
      <nav className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Nivux</div>
          <div className="flex gap-4">
            {children}
          </div>
        </div>
      </nav>
    );
  };