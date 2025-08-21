import React, { useState } from 'react';

const messages = [
  { name: 'Vidit Puri', email: 'viditpuri@gmail.com', category: 'Flight', pnr: '#25653', status: 'Unread', unread: 5 },
  { name: 'Manisha Bhardwaj', email: 'manisha@gmail.com', category: 'Hotel', pnr: '#D478256', status: 'Read', unread: 0 },
  { name: 'Aditi Sharma', email: 'aditi@gmail.com', category: 'Package', pnr: '#FK6892', status: 'Replied', unread: 0 },
  { name: 'Amanat', email: 'amanat@gmail.com', category: 'Flight', pnr: '#92722', status: 'Unread', unread: 5 },
];

const initialChats = {
  '#25653': [
    { from: 'customer', text: 'Hi, I need to reschedule my flight to next week.', time: '18/07/2025 11:11 AM' },
    { from: 'admin', text: 'Sure, can you share your preferred new date and time?', time: '18/07/2025 11:12 AM' },
  ],
  '#D478256': [],
  '#FK6892': [],
  '#92722': [],
};

const MessagesDashboard = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [chatData, setChatData] = useState(initialChats);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim() || !selectedMessage) return;

    const timestamp = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const updatedChat = [
      ...(chatData[selectedMessage.pnr] || []),
      { from: 'admin', text: newMessage.trim(), time: timestamp },
    ];

    setChatData(prev => ({
      ...prev,
      [selectedMessage.pnr]: updatedChat,
    }));

    setNewMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex p-6 gap-6 bg-gray-50 min-h-screen text-sm">
      {/* Left Panel */}
      <div className="w-2/5 bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Messages</h2>

        {/* Search + Filters */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Search by Booking ID, Reference ID etc..."
            className="flex-1 border border-gray-300 px-3 py-2 rounded-md text-sm"
          />
          <button className="bg-[#0f172a] text-white p-2 rounded-md">🔍</button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-4">
          <select className="w-1/3 border border-gray-300 px-2 py-2 rounded-md">
            <option>All Categories</option>
          </select>
          <input type="date" className="w-1/3 border border-gray-300 px-2 py-2 rounded-md" />
          <select className="w-1/3 border border-gray-300 px-2 py-2 rounded-md">
            <option>All Status</option>
          </select>
        </div>

        {/* Message List */}
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className="flex justify-between items-center border-b pb-2">
              <div>
                <div className="font-medium">{msg.name}</div>
                <div className="text-gray-500 text-xs">{msg.category} PNR {msg.pnr}</div>
              </div>
              <div className="text-right">
                <div
                  className={`font-semibold ${
                    msg.status === 'Unread'
                      ? 'text-red-500'
                      : msg.status === 'Replied'
                      ? 'text-blue-500'
                      : 'text-gray-500'
                  }`}
                >
                  {msg.status}
                </div>
                <div className="text-xs">
                  {msg.unread > 0 ? `${msg.unread} Unread` : 'All Read'}
                </div>
              </div>
              <button
                onClick={() => setSelectedMessage(msg)}
                className="text-blue-500 hover:underline"
              >
                {msg.status === 'Replied' ? 'View' : 'Reply'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel (only if selected) */}
      {selectedMessage && (
        <div className="w-3/5 bg-white rounded-xl shadow p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
              {selectedMessage.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            <div>
              <div className="font-semibold text-base">{selectedMessage.name}</div>
              <div className="text-gray-500 text-sm">{selectedMessage.email}</div>
              <div className="text-sm">PNR {selectedMessage.pnr}</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {(chatData[selectedMessage.pnr] || []).map((chat, idx) => (
              <div key={idx} className={chat.from === 'admin' ? 'text-left' : 'text-right'}>
                <div className="inline-block bg-gray-100 text-sm p-3 rounded-md max-w-xs">
                  {chat.text}
                </div>
                <div className="text-xs text-gray-400 mt-1">{chat.time}</div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="mt-4 border-t pt-4 flex gap-2">
            <input
              type="text"
              placeholder="Type a reply..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 border border-gray-300 px-3 py-2 rounded-md text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesDashboard;
