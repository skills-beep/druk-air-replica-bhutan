
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destination: {
    city: string;
    price: string;
  };
}

const BookingDialog = ({ open, onOpenChange, destination }: BookingDialogProps) => {
  const [passengers, setPassengers] = useState(1);
  const basePrice = parseInt(destination.price.replace(/[^0-9]/g, ""));
  const totalPrice = basePrice * passengers;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Flight to {destination.city}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="passengers">Number of Passengers</Label>
            <Input
              id="passengers"
              type="number"
              min="1"
              value={passengers}
              onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label>Total Price</Label>
            <p className="text-2xl font-bold text-druk-blue">
              Nu {totalPrice.toLocaleString()}
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-druk-blue hover:bg-druk-darkblue text-white">
            Confirm Booking
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
