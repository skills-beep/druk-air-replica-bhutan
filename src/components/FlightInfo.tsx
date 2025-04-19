
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const flightSchedules = [
  { id: 1, flight: "KB 204", from: "Paro", to: "Delhi", departure: "09:30", arrival: "11:10", days: "Mon, Wed, Fri" },
  { id: 2, flight: "KB 205", from: "Delhi", to: "Paro", departure: "12:40", arrival: "14:20", days: "Mon, Wed, Fri" },
  { id: 3, flight: "KB 124", from: "Paro", to: "Bangkok", departure: "08:15", arrival: "12:05", days: "Tue, Thu, Sat" },
  { id: 4, flight: "KB 125", from: "Bangkok", to: "Paro", departure: "13:30", arrival: "16:55", days: "Tue, Thu, Sat" },
];

const FlightInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="flight-status">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="flight-status">Flight Status</TabsTrigger>
              <TabsTrigger value="schedule">Flight Schedule</TabsTrigger>
            </TabsList>
            
            <TabsContent value="flight-status" className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Check Your Flight Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-1">Flight Number</label>
                  <Input placeholder="e.g. KB 204" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <Input type="date" className="w-full" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-druk-blue hover:bg-druk-darkblue">
                    <Search className="mr-2 h-4 w-4" /> Check Status
                  </Button>
                </div>
              </div>
              <div className="text-center text-gray-600 text-sm">
                <p>You can also check flight status by route selection</p>
                <Button variant="link" className="text-druk-blue">
                  Check by Route
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule" className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Flight Schedule</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Flight
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Route
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Departure
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Arrival
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Days
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {flightSchedules.map((flight) => (
                      <tr key={flight.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-druk-blue">
                          {flight.flight}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {flight.from} - {flight.to}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {flight.departure}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {flight.arrival}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          {flight.days}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-druk-blue hover:bg-druk-darkblue">
                  View Full Schedule
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FlightInfo;
