import { createContext, useContext, useState } from "react";

type BookingData = {
    weight: number,
}

type BookingContextType = {
  bookingData: BookingData,
  updateWeight: (weight: number) => void;
}

// Create the Context
const BookingContext = createContext<BookingContextType | null>(null);

// Create a Provider component
export function BookingProvider({ children }: {children: React.ReactNode}) {
  const [bookingData, setBookingData] = useState<BookingData>(
    {
      weight: 0
    }
  );

  function updateWeight(weight: number) {
    setBookingData(prev => ({
      ...prev,
      weight: weight
    }));
  }

  return (
    <BookingContext.Provider value={{
      bookingData,
      updateWeight
    }}>
      {children}
    </BookingContext.Provider>
  );
}

// Custom hook for accessing the Context
export function useBooking() {
    const context = useContext(BookingContext);

    if (context === null) {
        throw new Error(
            "useBooking must be used within a BookingProvider"
        );
    }

    return context;
}
