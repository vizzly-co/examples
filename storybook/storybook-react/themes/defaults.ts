// Commented lines are no longer in use

export const defaults = {
  // ----- BASE -----
  // fontFamily: "Inter, sans-serif",
  // fontSize: 14,
  detail: 'minimal',
  cellLimit: 4,
  rowLimit: 6,
  version: 2,
  // ----- ACCORDIONS -----
  accordion: {
    iconColor: '#3074D9',
    button: {
      fontWeight: 400,
      fontSize: 13,
      color: '#3074D9',
    },
  },
  // ----- ALERTS -----
  alerts: {
    padding: '8px 12px',
    borderRadius: '8px',
    title: {
      // color: "inherit",
      // fontFamily: "inherit",
      fontSize: '13px',
      fontWeight: 400,
      // lineHeight: "initial",
      // margin: "0",
    },
    content: {
      // color: "inherit",
      // fontFamily: "inherit",
      fontSize: '13px',
      fontWeight: 400,
      // lineHeight: "initial",
      // margin: "0",
    },
    info: {
      background: '#e0f2ff',
      border: '1px solid #e0f2ff',
      color: 'inherit',
      iconColor: '#1677ff',
      borderRadius: '8px',
    },
    warning: {
      background: '#fff5ea',
      border: '1px solid #e1b878',
      color: 'inherit',
      iconColor: '#b98900',
      borderRadius: '8px',
    },
    critical: {
      background: '#ff5555',
      border: '1px solid #ff5555',
      color: '#ffffff',
      iconColor: '#ffffff',
      borderRadius: '8px',
    },
  },
  // ----- BASE FONT -----
  baseFont: {
    // lineHeight: "initial",
    // color: "#000000",
    fontFamily: 'Inter, sans-serif',
    // fontSize: "13px",
    // fontWeight: 500,
    // margin: "0",
  },
  // ----- BUTTONS -----
  buttons: {
    primary: {
      background: '#374151',
      border: '0',
      borderRadius: '8px',
      boxShadow: 'unset',
      color: '#fff',
      fontSize: 14,
      fontWeight: 500,
      height: 'auto',
      narrowPadding: '.6rem 1rem',
      padding: '.6rem 1rem',
      '&:hover': {
        background: '#4b5462',
        border: '0',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#fff',
        fontWeight: 500,
        opacity: 1,
      },
      '&:disabled': {
        background: '#9ba0a8',
        border: '0',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#fff',
        fontWeight: 500,
        opacity: 1,
      },
      '&:hover:disabled': {
        background: '#9ba0a8',
        border: '0',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#fff',
        fontWeight: 500,
        opacity: 1,
      },
    },
    secondary: {
      background: '#fff',
      border: '0',
      borderRadius: '8px',
      boxShadow: 'unset',
      color: '#374151',
      fontSize: 14,
      fontWeight: 500,
      height: 'auto',
      narrowPadding: '.6rem 1rem',
      padding: '.6rem 1rem',
      '&:hover': {
        background: '#E9EBF0',
        border: '0',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#374151',
        fontWeight: 500,
        opacity: 0.7,
      },
      '&:disabled': {
        background: '#fff',
        border: '0',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#374151',
        fontWeight: 500,
        opacity: 0.7,
      },
      '&:hover:disabled': {
        background: '#fff',
        border: '0',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#374151',
        fontWeight: 500,
        opacity: 0.7,
      },
    },
    add: {
      background: 'transparent',
      border: '2px dashed #c3c6ca',
      boxShadow: 'unset',
      borderRadius: '8px',
      color: '#555d6b',
      '&:hover': {
        background: 'transparent',
        border: '2px dashed #3074d9',
        boxShadow: 'unset',
        color: '#3074d9',
      },
      small: {
        fontWeight: 500,
        padding: '0 12px',
        fontSize: '12px',
      },
      medium: {
        fontWeight: 500,
        padding: '0 12px',
        fontSize: '12px',
      },
      large: {
        fontWeight: 500,
        padding: '0 12px',
        fontSize: '14px',
      },
    },
  },
  // ----- CHARTS -----
  charts: {
    colors: ['#feae4a', '#5fbaff', '#e15e9d'],
    title: {
      color: '#4b5462',
      fontFamily: 'Inter, sans-serif',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.15,
      margin: '0',
      textAlign: 'left',
    },
    subject: {
      color: '#8f8f91',
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.15,
      margin: '0 0 0.3rem 0',
      textAlign: 'left',
    },
    iconColor: '#2d2f31',
    labels: {
      color: 'rgba(0, 0, 0, 0.6)',
      fontFamily: 'inherit',
      fontSize: 9,
      fontWeight: 700,
    },
    axisTitles: {
      color: '#000',
      fontFamily: 'inherit',
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    grid: {
      stroke: 'rgba(200, 200, 200, 0.2)',
    },
    axis: {
      stroke: '#eaeaea',
    },
    pie: {
      cornerRadius: 5,
      gap: true,
      hole: true,
    },
    barChart: {
      cornerRadius: 3,
    },
    singleStat: {
      delteStyle: 'pill',
    },
    threshold: {
      stroke: '#F4F4F4',
    },
    popoverMenus: {
      background: 'white',
      borderRadius: '3px',
      boxShadow: '0 1px 2px rgba(33,33,33,0.2)',
      color: '#212529',
      fontFamily: 'Inter, sans-serif',
      letterSpacing: '0.02em',
      padding: '.3rem .5rem',
    },
  },
  // ----- DASHBOARD -----
  dashboard: {
    // Empty dashboard cells
    borderRadius: '0.75rem',
    borderWidth: 2,
    borderColor: '#d7d9dc',
    borderStyle: 'solid',
    icon: {
      // 3 dots 'more' icon
      color: '#414a95',
      background: 'transparent',
      borderRadius: 0,
      padding: 0,
      '&:disabled': {
        color: '#414a95',
        background: 'transparent',
      },
      '&:hover': {
        color: '#6A7383',
        background: 'transparent',
      },
    },
  },
  // ----- DROPDOWNS -----
  dropdowns: {
    background: 'rgb(255 255 255 / 1)',
    color: 'inherit',
    border: '0px solid transparent',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    fontSize: 14,
    fontWeight: 500,
    separatorBorder: '1px transparent solid',
    selected: {
      background: 'rgb(255 255 255 / 1)',
      fontWeight: 500,
      color: 'inherit',
    },
    borderRadius: 8,
    padding: '0.5rem 1rem',
    '&:hover': {
      background: '#f5f5f6',
      fontWeight: 500,
      color: 'inherit',
    },
  },
  // ----- EDITOR -----
  editor: {
    settings: {
      // Styles for the Data/Format panel
      border: 'none',
      background: 'transparent',
      boxShadow: 'unset',
      borderRadius: '0',
      padding: '0',
    },
    component: {
      // Styles for the View preview
      border: 'none',
      background: 'transparent',
      boxShadow: 'unset',
      borderRadius: '0',
      padding: '0',
    },
    // gap between the settings and component panels
    // gap: "100px",
  },
  // ----- FILTERS -----
  filters: {
    filterBy: {
      background: '#fff',
      border: '0',
      borderRadius: '8px',
      boxShadow: 'unset',
      color: '#374151',
      fontSize: 14,
      fontWeight: 500,
      height: 'auto',
      // narrowPadding: ".6rem 1rem",
      padding: '0.45rem 1rem 0.46rem',
      '&:hover': {
        background: '#E9EBF0',
        border: '0',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#374151',
        fontWeight: 500,
        opacity: 0.7,
      },
      '&:disabled': {
        background: '#fff',
        border: '0',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#374151',
        fontWeight: 500,
        opacity: 0.7,
      },
      '&:hover:disabled': {
        background: '#fff',
        border: '0',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#374151',
        fontWeight: 500,
        opacity: 0.7,
      },
    },
  },
  // ----- FORMS -----
  forms: {
    label: {
      color: '#374151',
      fontFamily: 'inherit',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1.15,
      margin: '0 0 0.3rem 0',
    },
    input: {
      background: '#fff',
      border: '2px #dbdcdf solid',
      borderRadius: '8px',
      boxShadow: 'unset',
      color: '#374151',
      fontSize: '14px',
      fontWeight: 400,
      padding: '7.5px 1rem',
      '&:focus': {
        background: '#fff',
        border: '2px #e0f2ff solid',
        boxShadow: 'unset',
      },
      '&:hover': {
        background: '#fff',
        border: '2px #e0f2ff solid',
        boxShadow: 'unset',
      },
      '&:focus:hover': {
        background: '#fff',
        border: '2px #e0f2ff solid',
        boxShadow: 'unset',
      },
    },
    select: {
      background: '#fff',
      border: '2px #dbdcdf solid',
      borderRadius: '8px',
      boxShadow: 'unset',
      color: '#374151',
      fontSize: '14px',
      fontWeight: 400,
      padding: '7px 0 7px 1rem',
      indicatorColor: '#374151',
      '&:focus': {
        background: '#fff',
        border: '2px #e0f2ff solid',
        boxShadow: 'unset',
      },
      '&:hover': {
        background: '#fff',
        border: '2px #e0f2ff solid',
        boxShadow: 'unset',
      },
      '&:focus:hover': {
        background: '#fff',
        border: '2px #e0f2ff solid',
        boxShadow: 'unset',
      },
    },
    dateTime: {
      input: {
        // Applied to all 4 inputs (Start date, Time, End date, Time)
        background: '#fff',
        border: '2px #dbdcdf solid',
        borderRadius: '8px',
        boxShadow: 'unset',
        color: '#374151',
        fontSize: '14px',
        fontWeight: 400,
        // Time inputs have 0 padding left/right by default
        padding: '0.26rem 0.5rem',
        '&:focus': {
          background: '#fff',
          border: '2px #e0f2ff solid',
          boxShadow: 'unset',
        },
        '&:hover': {
          background: '#fff',
          border: '2px #e0f2ff solid',
          boxShadow: 'unset',
        },
        '&:focus:hover': {
          background: '#fff',
          border: '2px #e0f2ff solid',
          boxShadow: 'unset',
        },
      },
      date: {
        width: '96px',
      },
      time: {
        width: '48px',
      },
      calendar: {
        title: {
          color: '#374151',
          fontFamily: 'inherit',
          fontSize: 16,
          // fontWeight: 700,
          lineHeight: 1.15,
          // margin: "0",
        },
        selected: {
          background: '#3074d9',
          border: '0',
          color: '#fff',
        },
        unselected: {
          background: 'transparent',
          color: 'inherit',
          border: '1px solid #c9d1d9',
          '&:hover': {
            background: '#e4e7e7',
            border: '1px solid #e4e7e7',
            color: 'inherit',
          },
        },
        arrows: {
          background: 'transparent',
          border: '1px solid #e4e7e7',
          borderRadius: '8px',
          fill: '#374151',
          '&:hover': {
            background: '#e9ebf0',
            border: '1px solid #c4c4c4',
          },
        },
      },
      // Arrow color between start and end date/time
      indicatorColor: '#374151',
    },
  },
  // ----- HEADERS -----
  header: {
    background: '#fff',
    borderBottom: `2px solid #cdcfd3`,
    borderTop: 'none',
    padding: '0 0 0.5rem 0',
    textAlign: 'left',
    title: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.15,
      color: 'inherit',
      fontFamily: 'inherit',
      margin: '0',
      htmlElement: 'span', // Supports 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'
    },
  },
  // ----- ICONS -----
  icons: {
    borderRadius: '8px',
    color: '#414a59',
    padding: '4px',
    // width: "width",
    // height: "height",
    '&:hover': {
      color: '#6a7383',
      background: '#f5f5f6',
    },
  },
  // ----- LIBRARY -----
  library: {
    verified: {
      color: 'rgba(22, 119, 255, 0.3)',
    },
  },
  // ----- LISTS -----
  lists: {
    background: '#ffffff',
    border: '2px solid #dbdcdf',
    borderRadius: '8px',
    boxShadow: 'unset',
    color: 'inherit',
    fontSize: '13px',
    // padding: "0",
    title: {
      // Labels above list items
      color: 'inherit',
      fontFamily: 'inherit',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 'initial',
      margin: '0',
    },
    // subTitle: {
    //   color: "",
    //   fontFamily: "",
    //   fontSize: 14,
    //   fontWeight: 400,
    //   lineHeight: 1.15,
    //   margin: "0",
    //   textTransform: "capitalize",
    //   borderBottom: "1px solid #e5e7eb",
    // },
    icon: {
      // 'x' icons for removing list items
      color: 'rgba(31, 41, 55, 0.6)',
      background: '#ffffff',
      border: 'none',
    },
    select: {
      // List item select dropdown controls (e.g. 'Count'/'Unique', 'Asc'/'Desc' etc)
      padding: '4px 0 3px 16px',
      fontSize: '13px',
      fontWeight: 400,
      color: '#374151',
      '&:hover': {
        background: '#f9f9f9',
      },
    },
    row: {
      padding: '1px 1.5px 3.5px 8px',
    },
  },
  // ----- MODALS -----
  modals: {
    overlay: {
      background: '#000000',
      opacity: 0.3,
    },
    base: {
      color: 'inherit',
      border: '0px solid',
      background: '#ffffff',
      boxShadow:
        '0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      borderRadius: '8px',
      zIndex: 2147483147,
    },
    content: {
      background: 'rgb(229 231 235 / 0.2)',
      fontWeight: 'inherit',
      fontSize: '14px',
      padding: '1rem 2rem',
      alternativeBackground: 'rgb(229 231 235 / 0.2)', // Shown in View Library only
    },
    header: {
      background: 'rgb(229 231 235 / 0.2)',
      padding: '1.5rem 2rem 0.5rem 2rem',
      borderBottom: '0',
      fontSize: 18,
      fontWeight: 700,
    },
    footer: {
      background: 'none',
      borderTop: '0',
      padding: '0.5rem 2rem 0.5rem 2rem',
      borderRadius: '0',
    },
    options: {
      disableOutsideClick: false,
      closeButton: 'outside',
      showTitle: {
        editor: true, // "Editor" title shown in View Editor
        library: false, // "Select Template" title shown in View Library
      },
    },
  },
  // ----- PANELS -----
  panels: {
    border: '0',
    background: '#fff',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    borderRadius: '8px',
    padding: '0.75rem 1rem',
  },
  // ----- POPOVER MENU -----
  popoverMenu: {
    background: '#f9f7fa',
    color: 'inherit',
    // border: "10px soild red",
    boxShadow:
      '0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    fontSize: '14px',
    fontWeight: 'inherit',
    separatorBorder: 'none',
    borderRadius: '8px',
    padding: '0.35rem 0.75rem',
    '&:hover': {
      background: '#ffffff',
      fontWeight: 'inherit',
      color: 'inherit',
    },
  },
  // ----- RADIO GROUP -----
  radioGroup: {
    label: {
      color: 'initial',
      fontSize: '13px',
      fontWeight: 'inherit',
    },
    description: {
      color: '#5f6773',
      fontSize: '11px',
      fontWeight: 'inherit',
    },
  },
  // ----- SEARCH -----
  search: {
    background: '#ffffff',
    border: '0',
    borderRadius: '0.5rem',
    color: 'inherit',
    fontSize: '16px',
    fontWeight: 500,
    height: '36px',
    padding: '6px 10px 7px 16px',
    '&:hover': {
      background: '#ffffff',
      boxShadow: '0 0 0 3px rgb(224, 242, 255)',
    },
    '&:focus': {
      boxShadow: '0 0 0 3px rgb(224, 242, 255)',
    },
    icons: {
      color: '#3074d9',
    },
  },
  // ----- SECTION -----
  section: {
    panel: {
      border: '0',
      background: 'transparent',
      boxShadow: 'unset',
      borderRadius: '0',
      padding: '0',
    },
    title: {
      lineHeight: 'inherit',
      color: 'inherit',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      margin: '0',
    },
  },
  // ----- TABLES -----
  tables: {
    th: {
      background: 'transparent',
      borderBottom: '2px solid #c3c6ca',
      borderRight: '1px solid transparent',
      borderTop: 0,
      color: 'inherit',
      fontSize: 13,
      fontWeight: 600,
      padding: '0.5rem',
      textTransform: 'none',
      inner: {
        // borderBottomWidth: 100,
        // borderRight: true,
        padding: '0',
      },
      // first: {
      //   borderLeft: "1px solid red",
      // },
      // last: {
      //   borderRight: "1px solid red",
      // },
      '&:hover': {
        background: 'transparent',
        color: '#4b5462',
      },
      group: {
        fontSize: 13,
        fontWeight: 400,
        textTransform: 'none',
      },
      column: {
        // (Pivot Tables only) Applied to 'Group rows'
        background: 'rgba(48, 116, 217, 0.05)',
        // borderLeft: "1px solid red",
        borderRight: '1px solid #c3c6ca',
        color: 'inherit',
        padding: '0.5rem',
      },
      row: {
        // (Pivot Tables only) Applied to 'Group columns'
        borderBottom: '1px solid #c3c6ca',
        // borderLeft: "3px solid red",
        borderRight: '1px solid transparent',
        padding: '0.5rem',
      },
      level: {
        2: {
          background: `rgba(48, 116, 217, 0.15)`,
        },
      },
    },
    body: {
      borderLeft: 'none', // (Basic Tables only)
      borderRight: 'none', // (Basic Tables only)
      cells: {
        borderBottom: '1px solid #eff0f1',
        borderLeft: 'none',
        borderRight: 'none',
        fontSize: '13px',
        padding: '7.3px 8px',
      },
      odd: {
        background: 'transparent',
        color: 'initial',
        '&:hover': {
          color: 'initial',
          background: '#f5f6f6',
        },
      },
      even: {
        background: 'transparent',
        color: 'initial',
        '&:hover': {
          color: 'initial',
          background: '#f5f6f6',
        },
      },
    },
  },
  // ----- TABS -----
  tabs: {
    borderBottom: 'none',
    selected: {
      background: 'transparent',
      borderBottom: '3px solid #3683f5',
      borderLeft: 'none',
      borderRadius: '0',
      borderRight: 'none',
      borderTop: 'none',
      boxShadow: 'unset',
      color: 'inherit',
      fontSize: '14px',
      fontWeight: 'initial',
      // height: "42px",
      narrowPadding: 'padding',
      padding: '11.5px 16px',
      '&:hover': {
        background: 'transparent',
        borderRadius: '6px 6px 0 0',
        boxShadow: 'unset',
        color: '#202223',
        fontWeight: 'initial',
        opacity: '1',
      },
      '&:disabled': {
        background: 'transparent',
        borderRadius: '6px 6px 0 0',
        boxShadow: 'unset',
        color: '#rgba(16, 16, 16, 0.3)',
        fontWeight: 'initial',
        opacity: '1',
      },
      '&:hover:disabled': {
        background: 'transparent',
        borderRadius: '6px 6px 0 0',
        boxShadow: 'unset',
        color: '#202223',
        fontWeight: 'initial',
        opacity: '1',
      },
    },
    unselected: {
      background: 'transparent',
      borderBottom: '1px solid #ebeced',
      borderLeft: 'none',
      borderRadius: '0',
      borderRight: 'none',
      borderTop: 'none',
      boxShadow: 'unset',
      color: '#6d7175',
      fontSize: '14px',
      fontWeight: 'initial',
      // height: "42px",
      narrowPadding: 'padding',
      padding: '11.5px 16px 13.5px',
      '&:hover': {
        background: 'transparent',
        borderRadius: '6px 6px 0 0',
        boxShadow: 'unset',
        color: '#202223',
        fontWeight: 'initial',
        opacity: '1',
      },
      '&:disabled': {
        background: 'transparent',
        borderRadius: '6px 6px 0 0',
        boxShadow: 'unset',
        color: '#6d7175',
        fontWeight: 'initial',
        opacity: '1',
      },
      '&:hover:disabled': {
        background: 'transparent',
        borderRadius: '6px 6px 0 0',
        boxShadow: 'unset',
        color: '#202223',
        fontWeight: 'initial',
        opacity: '1',
      },
    },
  },
  // ----- TITLES -----
  titles: {
    // lineHeight: "150%",
    // color: "red",
    fontFamily: 'Inter, sans-serif',
    // fontSize: 100,
    // fontWeight: 900,
    // margin: "margin",
  },
  // ----- TOOLTIPS -----
  tooltips: {
    background: '#374151',
    borderRadius: '4px',
    boxShadow: 'unset',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    lineHeight: '1rem',
    padding: '6px 8px',
  },
};
