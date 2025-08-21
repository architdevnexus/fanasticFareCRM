import React from 'react'


const orders = [
  {
    id: "#EKG4951",
    name: "Mona Miha",
    email: "mona@gmail.com",
    phone: "9876543210",
    departureDate: "2023-10-01",
    arrivalDate: "2023-10-10",
    departureTime: "10:00 AM",
    arrivalTime: "6:00 PM",
    packageName: "Bali Explorer",
    packageTheme: "Beach",
    duration: "9 Days",
    totalAmount: "$2000",
    paidAmount: "$1500",
    remainingAmount: "$500",
    status: "Paid",
    createdDate: "2023-09-20",
    assignedBy: "Mukti",
    remarks: "Confirmed",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "#EKG4238",
    name: "Picki Witsha",
    email: "picki@gmail.com",
    phone: "9898989898",
    departureDate: "2023-11-12",
    arrivalDate: "2023-11-20",
    departureTime: "9:00 AM",
    arrivalTime: "5:00 PM",
    packageName: "Swiss Alps Tour",
    packageTheme: "Mountain",
    duration: "8 Days",
    totalAmount: "$3000",
    paidAmount: "$1000",
    remainingAmount: "$2000",
    status: "Due",
    createdDate: "2023-09-25",
    assignedBy: "Abdul",
    remarks: "Awaiting Advance",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "#EKG4339",
    name: "Jenny Wilson",
    email: "jennyw@gmail.com",
    phone: "9123456789",
    departureDate: "2023-12-05",
    arrivalDate: "2023-12-15",
    departureTime: "7:30 AM",
    arrivalTime: "3:30 PM",
    packageName: "European Delights",
    packageTheme: "Culture",
    duration: "10 Days",
    totalAmount: "$4000",
    paidAmount: "$2000",
    remainingAmount: "$2000",
    status: "Due",
    createdDate: "2023-10-01",
    assignedBy: "Prakash",
    remarks: "Partial Payment",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "#EKG4365",
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "9988776655",
    departureDate: "2023-09-01",
    arrivalDate: "2023-09-08",
    departureTime: "8:00 AM",
    arrivalTime: "4:00 PM",
    packageName: "Thailand Getaway",
    packageTheme: "Adventure",
    duration: "7 Days",
    totalAmount: "$1800",
    paidAmount: "$0",
    remainingAmount: "$1800",
    status: "Due",
    createdDate: "2023-08-20",
    assignedBy: "Amanant",
    remarks: "Partial Payment",
    img: "https://i.pravatar.cc/150?img=4",
  },
];

const statusStyles = {
  Paid: "text-green-600 bg-green-100",
  Due: "text-yellow-600 bg-yellow-100",
  Canceled: "text-red-600 bg-red-100",
};

export const DailySalesReportMgt = () => {
  return (
    <div className='pl-8 mt-10'>
              <div className="bg-white rounded-xl shadow p-6 w-[1070px] overflow-x-auto ">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Latest Order</h2>
        <table className="min-w-full text-sm text-left">
          <thead className="text-gray-500 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-4 py-3">Customer Name</th>
              <th className="px-4 py-3">Customer Email</th>
              <th className="px-4 py-3">Phone No.</th>
              <th className="px-4 py-3">Departure Date</th>
              <th className="px-4 py-3">Arrival Date</th>
              <th className="px-4 py-3">Departure Time</th>
              <th className="px-4 py-3">Arrival Time</th>
              <th className="px-4 py-3">Package Name</th>
              <th className="px-4 py-3">Package Theme</th>
              <th className="px-4 py-3">Trip Duration</th>
              <th className="px-4 py-3">Total Amount</th>
              <th className="px-4 py-3">Paid Amount</th>
              <th className="px-4 py-3">Remaining Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Created Date</th>
              <th className="px-4 py-3">Assigned By</th>
              <th className="px-4 py-3">Remarks</th>
              <th className="px-4 py-3">Print</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center space-x-3">
                  {/* <img src={order.img} alt={order.name} className="w-8 h-8 rounded-full" /> */}
                  <div>
                    <p className="font-medium text-gray-700">{order.name}</p>
                    {/* <p className="text-gray-400 text-xs">{order.email}</p> */}
                  </div>
                </td>
                <td className="px-4 py-3">{order.email}</td>
                <td className="px-4 py-3">{order.phone}</td>
                <td className="px-4 py-3">{order.departureDate}</td>
                <td className="px-4 py-3">{order.arrivalDate}</td>
                <td className="px-4 py-3">{order.departureTime}</td>
                <td className="px-4 py-3">{order.arrivalTime}</td>
                <td className="px-4 py-3">{order.packageName}</td>
                <td className="px-4 py-3">{order.packageTheme}</td>
                <td className="px-4 py-3">{order.duration}</td>
                <td className="px-4 py-3">{order.totalAmount}</td>
                <td className="px-4 py-3">{order.paidAmount}</td>
                <td className="px-4 py-3">{order.remainingAmount}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}>
                    <span className="mr-1 w-2 h-2 rounded-full bg-current"></span>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3">{order.createdDate}</td>
                <td className="px-4 py-3">{order.assignedBy}</td>
                <td className="px-4 py-3">{order.remarks}</td>
                <td className="px-4 py-3">
                  <button className="text-blue-600 hover:underline text-sm">Print</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
