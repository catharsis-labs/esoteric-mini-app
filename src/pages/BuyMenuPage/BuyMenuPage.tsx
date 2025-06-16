import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function BuyMenuPage() {
    const navigate = useNavigate()

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Buy Menu</h1>
            <div className="space-y-4">
                <p>This is the buy menu page.</p>
                <Button onClick={() => navigate(-1)}>Go Back</Button>
            </div>
        </div>
    )
}