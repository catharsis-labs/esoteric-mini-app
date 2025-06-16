import { Button } from "@/components/ui/button"
import { Home, ShoppingBasket, Settings, User } from "lucide-react"
import {Link} from "@/components/Link/Link.tsx";

export function BottomNavigationBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-around p-2">
        <Link to="/">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Home className="h-5 w-5" />
          </Button>
        </Link>
        <Link to="/buy-menu">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingBasket className="h-5 w-5" />
          </Button>
        </Link>
        <Link to="/user-page">
          <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
          </Button>
        </Link>
        <Link to="/settings">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}