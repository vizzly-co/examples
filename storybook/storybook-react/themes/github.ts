export const gitHubDarkTheme = {
  rowLimit: 6,
  detail: 'minimal',
  panels: {
    background: '#0d1117',
    border: '1px solid #30363d',
  },
  tables: {
    th: {
      background: '#161b22',
      color: '#7d8590',
      fontWeight: 300,
      fontSize: 14,
      borderBottom: '1px solid #30363d',
      textTransform: 'inherit',
      padding: 5,
      '&:hover': {
        color: '#e6edf3',
        background: 'rgb(16,1B,22)',
      },
      inner: {
        borderBottomWidth: 0,
        borderRight: false,
      },
      first: {
        borderLeft: '1px solid transparent',
      },
      last: {
        borderRight: '1px solid transparent',
      },
    },
    body: {
      odd: {
        background: 'inherit',
        color: '#e6edf3',
        '&:hover': {
          background: '#161b22',
        },
      },
      even: {
        background: 'inherit',
        color: '#e6edf3',
        '&:hover': {
          background: '#161b22',
        },
      },
      borderLeft: '1px solid transparent',
      borderRight: '1px solid transparent',
      cells: {
        fontSize: 14,
        padding: 16,
        borderBottom: '1px solid #21262d',
      },
    },
  },
  buttons: {
    secondary: {
      fontWeight: 500,
      color: '#c9d1d9',
      background: '#21262d',
      boxShadow: 'unset',
      border: '1px solid #f0f6fc1a',
      fontSize: 14,
      padding: '4px 16px 5px',
      '&:hover': {
        border: '1px solid #8b949e',
        background: '#30363d',
        color: '#c9d1d9',
      },
    },
    primary: {
      fontWeight: 500,
      color: '#ffffff',
      background: '#238636',
      boxShadow: 'unset',
      border: '1px solid #f0f6fc1a',
      fontSize: 14,
      padding: '4px 16px 5px',
      '&:hover': {
        border: '1px solid #f0f6fc1a',
        background: '#2ea043',
        color: '#ffffff',
      },
    },
    add: {
      background: 'transparent',
      border: '0px solid transparent',
      color: 'rgb(139, 148, 158)',
      borderRadius: 6,
      '&:hover': {
        background: '#30363d',
        color: 'rgb(139, 148, 158)',
        border: '0px solid transparent',
      },
      small: {
        fontSize: 14,
        fontWeight: 500,
      },
    },
    grid: {
      selected: {
        borderRadius: 6,
        fontWeight: 400,
        background: 'rgb(48, 54, 61)',
        fontSize: 14,
        color: '#c9d1d9',
        boxShadow: 'rgb(31 111 235) 0px 0px 0px 1px',
        border: '1px solid rgb(31, 111, 235)',
        '&:hover': {
          boxShadow: 'rgb(31 111 235) 0px 0px 0px 1px',
          border: '1px solid rgb(31, 111, 235)',
          background: 'rgb(48, 54, 61)',
        },
      },
      unselected: {
        borderRadius: 6,
        fontWeight: 400,
        background: 'transparent',
        fontSize: 14,
        color: '#8b949e',
        border: '1px solid transparent',
        '&:hover': {
          boxShadow: 'unset',
          background: 'rgb(48, 54, 61)',
          border: '1px solid transparent',
        },
      },
    },
  },
  alerts: {
    info: {
      background: '#388bfd26',
      color: '#c9d1d9',
      border: '1px solid #388bfd66',
      borderRadius: 6,
      iconColor: '#58a6ff',
    },
    warning: {
      background: 'linear-gradient(#bb800926, #bb800926)',
      color: '#c9d1d9',
      border: '1px solid #bb800966',
      borderRadius: 6,
      iconColor: '#d29922',
    },
  },
  forms: {
    label: {
      color: 'rgb(201,209,217)',
      fontSize: 14,
      fontWeight: 600,
    },
    input: {
      color: '#c9d1d9',
      background: '#010409',
      padding: '6.25px 12px',
      border: '1px solid #30363d',
      borderRadius: 6,
      fontSize: 14,
      '&:focus': {
        border: '1px solid #58a6ff',
        boxShadow: 'inset 0 0 0 1px transparent',
      },
      '&:focus:hover': {
        border: '1px solid #58a6ff',
        boxShadow: 'inset 0 0 0 1px transparent',
      },
      '&:hover': {
        border: '1px solid #30363d',
        boxShadow: 'inset 0 0 0 1px transparent',
      },
    },
    select: {
      background: '#010409',
      borderRadius: 6,
      border: '1px solid #30363d',
      fontSize: 14,
      padding: '6.25px 0.5rem',
      boxShadow: 'inset 0 0 0 1px  transparent',
      color: '#c9d1d9',
      '&:hover': {
        border: '1px solid #30363d',
        boxShadow: 'inset 0 0 0 1px transparent',
      },
      '&:focus': {
        border: '1px solid #58a6ff',
      },
      indicatorColor: '#c9d1d9',
    },
    dateTime: {
      input: {
        background: '#010409',
        borderRadius: 6,
        border: '1px solid #30363d',
        fontSize: 14,
        boxShadow: 'inset 0 0 0 1px  transparent',
        color: '#c9d1d9',
        padding: '0.25rem 0.5rem',
        '&:focus': {
          border: '1px solid #58a6ff',
          boxShadow: 'inset 0 0 0 1px transparent',
        },
        '&:focus:hover': {
          border: '1px solid #58a6ff',
          boxShadow: 'inset 0 0 0 1px transparent',
        },
        '&:hover': {
          border: '1px solid #30363d',
          boxShadow: 'inset 0 0 0 1px transparent',
        },
      },
      date: {
        width: 96,
      },
      time: {
        width: 64,
      },
      indicatorColor: '#c9d1d9',
    },
  },
  dropdowns: {
    fontSize: 12,
    background: '#161b22',
    color: '#c9d1d9',
    boxShadow: '0 8px 24px #010409',
    borderRadius: 6,
    border: '1px solid #30363d',
    separatorBorder: '1px solid #21262d',
    '&:hover': {
      background: '#6e76811a',
    },
    padding: '7px 18px',
  },
  lists: {
    border: '1px solid #30363d',
    color: '#c9d1d9',
    borderRadius: 6,
    background: '#010409',
    icon: {
      color: 'rgb(201, 209, 217)',
      background: '#0d1117',
      border: '1px solid #30363d',
    },
  },
  tabs: {
    selected: {
      borderRadius: '0',
      padding: '11.5px 2px',
      fontSize: 14,
      fontWeight: 500,
      background: 'transparent',
      color: 'rgb(201, 209, 217)',
      borderBottom: '2px solid #f78166',
    },
    unselected: {
      borderRadius: '0',
      padding: '11.5px 2px 12.5px',
      fontSize: 14,
      fontWeight: 'initial',
      background: 'transparent',
      color: '#c9d1d9',
      borderBottom: '1px solid rgb(48, 54, 61)',
      '&:hover': {
        color: 'rgb(201, 209, 217)',
        background: '#b1bac41f',
        borderRadius: '6px 6px 0 0',
      },
    },
  },
  modals: {
    base: {
      background: '#161b22',
      border: '1px solid #30363d',
      borderRadius: 6,
      color: '#c9d1d9',
    },
    content: {
      alternativeBackground: 'inherit',
    },
  },
  charts: {
    title: {
      fontSize: 16,
      color: '#c9d1d9',
    },
    labels: {
      color: '#c9d1d9',
      fontWeight: 300,
      fontSize: 11,
    },
    grid: {
      stroke: 'rgba(25,144,206, 0.7)',
    },
    axis: {
      stroke: 'rgba(25,144,206, 0.9)',
    },
    iconColor: 'rgb(201, 209, 217)',
  },

  popoverMenu: {
    background: '#161b22',
    border: '0px solid transparent',
    color: '#c9d1d9',
    borderRadius: 12,
    padding: '6px 16px',
    boxShadow: 'rgb(48 54 61) 0px 0px 0px 1px, rgb(1 4 9 / 85%) 0px 16px 32px',
    '&:hover': { background: '#b1bac41f', color: 'rgb(201, 209, 217)' },
  },
  accordion: {
    iconColor: '#2f81f7',
    button: {
      fontWeight: 300,
      fontSize: 14,
      color: '#2f81f7',
    },
  },
  dashboard: {
    borderColor: '#30363d',
    borderWidth: 2,
    borderRadius: 12,
    icon: {
      color: 'rgb(201, 209, 217)',
    },
  },
  search: {
    background: '#161b22',
    border: '1px solid #30363d',
    color: '#ffffff',
    padding: '2px 10px 3px 16px',
    fontSize: 16,
    height: 32,
    '&:focus': {
      boxShadow: '0 0 0 3px rgb(56, 139, 235)',
    },
    '&:hover': {
      background: '#0d1117',
      boxShadow: '0 0 0 3px transparent',
    },
    icons: {
      color: '#7d8590',
    },
  },
  library: {
    verified: {
      color: 'rgb(56, 139, 235)',
    },
  },
};
