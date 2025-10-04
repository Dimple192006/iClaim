import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, BarChart3 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            iClaim
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <Link to="/customer">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400"
            >
              My Claims
            </Button>
          </Link>
          <Link to="/agent">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-yellow-500 dark:text-gray-300 dark:hover:text-yellow-400"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Agent Portal
            </Button>
          </Link>
          <Link to="/file-claim">
            <Button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white hover:opacity-90">
              File a Claim
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
