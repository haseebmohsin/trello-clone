export const store = {
  backlog: [
    { id: 1, project: 'ContactRM', title: 'Design a website', highlighted: true, created: '3 days ago' },
    { id: 2, project: 'AgentBook', title: 'Design a website', highlighted: true, created: '3 days ago' },
  ],

  toDo: [
    { id: 1, project: 'DW4RTeam', title: 'Design a website', created: '3 days ago' },
    { id: 2, project: 'Asteler.io', title: 'Design a website', created: '3 days ago' },
    { id: 3, project: 'ContactRM', title: 'Design a website', created: '3 days ago' },
    { id: 4, project: 'ContactRM', title: 'Design a website', created: '3 days ago' },
    { id: 5, project: 'ContactRM', title: 'Design a website', created: '3 days ago' },
  ],

  inProcess: [
    { id: 1, project: 'AgentBook', title: 'Design a website', created: '3 days ago' },
    { id: 2, project: 'AgentBook', title: 'Design a website', created: '3 days ago' },
    { id: 3, project: 'AgentBook', title: 'Design a website', created: '3 days ago' },
    { id: 4, project: 'AgentBook', title: 'Design a website', created: '3 days ago' },
    { id: 5, project: 'AgentBook', title: 'Design a website', created: '3 days ago' },
    { id: 6, project: 'AgentBook', title: 'Design a website', created: '3 days ago' },
    { id: 7, project: 'AgentBook', title: 'Design a website', created: '3 days ago' },
  ],

  inReview: [
    { id: 1, project: 'AgentBook', title: 'Design a website', highlighted: true, created: '3 days ago' },
    { id: 2, project: 'ContactRM', title: 'Design a website', highlighted: true, created: '3 days ago' },
    { id: 3, project: 'AgentBook', title: 'Design a website', highlighted: true, created: '3 days ago' },
    { id: 4, project: 'ContactRM', title: 'Design a website', highlighted: true, created: '3 days ago' },
    { id: 5, project: 'AgentBook', title: 'Design a website', highlighted: true, created: '3 days ago' },
  ],

  completed: [{ id: 1, project: 'ContactRM', title: 'Design a website', highlighted: true, created: '3 days ago' }],

  // Dropdown Modal state management
  isPinnedCardsModalOpen: false,
  isArchiveModalOpen: false,
  isFilterModalOpen: false,
  isSortByModalOpen: false,
  isViewsModalOpen: false,

  isListActionsModalOpen: false,
  currentCategory: null,
  categories: ['backlog', 'toDo', 'inProcess', 'inReview', 'completed'],
};
