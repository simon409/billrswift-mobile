const users = [
    {
      id: 1,
      name: "Said Mansouri",
      avatar: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
      isOnline: true
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600",
      isOnline: false
    },
    {
      id: 3,
      name: "Alex Johnson",
      avatar: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
      isOnline: true
    },
    {
      id: 4,
      name: "Fadi Anarchi",
      avatar: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isOnline: true
    }
  ]

  const contactList = [
    {
      userId: 1,
      lastMessage: 'Slt, stp envoyez moi le fichier facture...',
      lastMessageDateTime: '2024-07-16T08:30:00.000Z',
      lastChecked: '2024-07-16T07:00:00.000Z',
      messages: [
        { text: 'Hello', timestamp: '2024-07-16T06:00:00.000Z' },
        { text: 'How are you?', timestamp: '2024-07-16T07:30:00.000Z' },
        { text: 'Slt, stp envoyez moi le fichier facture...', timestamp: '2024-07-16T08:30:00.000Z' },

      ],
    },
    {
      userId: 2,
      lastMessage: 'Hi there!',
      lastMessageDateTime: '2024-07-15T23:30:00.000Z',
      lastChecked: '2024-07-16T07:00:00.000Z',
      messages: [
        { text: 'Hey!', timestamp: '2024-07-15T19:00:00.000Z' },
        { text: 'Hi there!', timestamp: '2024-07-15T23:30:00.000Z' },
      ],
    },
    {
      userId: 3,
      lastMessage: 'Goodbye',
      lastMessageDateTime: '2024-07-02T18:15:00.000Z',
      lastChecked: '2024-07-02T17:00:00.000Z',
      messages: [
        { text: 'See you later', timestamp: '2024-07-02T16:00:00.000Z' },
        { text: 'Goodbye', timestamp: '2024-07-02T18:15:00.000Z' },
      ],
    },
  ];

  const discussion = [
    {
      senderId: 1,
      recieverId: 4,
      messages: [
        { text: 'Hello', timestamp: '2024-07-16T06:00:00.000Z' }
      ],
    },
    {
      senderId: 4,
      recieverId: 1,
      messages: [
        { text: 'Hi', timestamp: '2024-07-16T06:02:00.000Z' },
        { text: 'How are you?', timestamp: '2024-07-16T06:02:10.000Z' },
      ],
    },
    {
      senderId: 1,
      recieverId: 4,
      messages: [
        { text: 'I am good, did you see the news today?', timestamp: '2024-07-16T06:03:00.000Z' }
      ],
    },
    {
      senderId: 4,
      recieverId: 1,
      messages: [
        { text: 'Yes', timestamp: '2024-07-16T06:03:10.000Z' },
        { text: 'I think this will change everything', timestamp: '2024-07-16T06:03:20.000Z' },
      ],
    },
    {
      senderId: 1,
      recieverId: 4,
      messages: [
        { text: 'Probably, i mean yes its good.', timestamp: '2024-07-16T06:04:05.000Z' },
        { text: 'But i don\'t think that people cares.', timestamp: '2024-07-16T06:04:10.000Z' },
      ],
    },
    {
      senderId: 4,
      recieverId: 1,
      messages: [
        { text: 'I think they will care.', timestamp: '2024-07-16T06:04:15.000Z' },
        { text: 'This is a big news.', timestamp: '2024-07-16T06:04:20.000Z' },
      ],
    },
    {
      senderId: 1,
      recieverId: 4,
      messages: [
        { text: 'Yes, you are right.', timestamp: '2024-07-16T06:05:00.000Z' },
        { text: 'I hope you are right.', timestamp: '2024-07-16T06:05:10.000Z' },
      ],
    },
    {
      senderId: 4,
      recieverId: 1,
      messages: [
        { text: 'I am always right. You know that.', timestamp: '2024-07-16T06:05:15.000Z' }
      ],
    },
  ]


  export { users, contactList, discussion };