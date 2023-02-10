const BACKLOG = 'Backlog'
const READY = 'Ready'
const IN_PROGRESS = 'In Progress'
const FINISHED = 'Finished'

const HOME_PAGE = '/kanban_board'

export { BACKLOG, READY, IN_PROGRESS, FINISHED, HOME_PAGE } 

const mockData = [
  {
    id: '1',
    status: BACKLOG,
    name: 'Login page - perfomance issues',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis luctus eros. Duis elementum massa ac turpis pretium, non viverra ipsum rutrum. Etiam vel sem nec ligula volutpat pellentesque.'
  },
  {
    id: '2',
    status: BACKLOG,
    name: 'Sprint bugfix',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis luctus eros. Duis elementum massa ac turpis pretium, non viverra ipsum rutrum. Etiam vel sem nec ligula volutpat pellentesque.'
  },
  {
    id: '3',
    status: READY,
    name: 'Checkout bugfix',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis luctus eros. Duis elementum massa ac turpis pretium, non viverra ipsum rutrum. Etiam vel sem nec ligula volutpat pellentesque.'
  },
  {
    id: '4',
    status: IN_PROGRESS,
    name: 'Auth bugfix',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis luctus eros. Duis elementum massa ac turpis pretium, non viverra ipsum rutrum. Etiam vel sem nec ligula volutpat pellentesque.'
  },
  {
    id: '5',
    status: FINISHED,
    name: 'Main page bugfix',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis luctus eros. Duis elementum massa ac turpis pretium, non viverra ipsum rutrum. Etiam vel sem nec ligula volutpat pellentesque.'
  },
]

export { mockData } 