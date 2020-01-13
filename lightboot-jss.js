import { createUseStyles } from "react-jss";
export default createUseStyles({
  container: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    WebkitBoxSizing: "border-box",
    MozBoxSizing: "border-box",
    boxSizing: "border-box",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  container_fluid: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto"
  },
  container_lg: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  container_md: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  container_sm: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  container_xl: {
    width: "100%",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (min-width: 1200px)": {
      maxWidth: "1140px"
    }
  },
  row: {
    display: "flex",
    MsFlexWrap: "wrap",
    flexWrap: "wrap"
  },
  col: {
    position: "relative",
    width: "100%"
  },
  col_1: {
    flex: "0 0 8.333333%",
    maxWidth: "8.333333%"
  },
  col_10: {
    flex: "0 0 83.333333%",
    maxWidth: "83.333333%"
  },
  col_11: {
    flex: "0 0 91.666667%",
    maxWidth: "91.666667%"
  },
  col_12: {
    flex: "0 0 100%",
    maxWidth: "100%"
  },
  col_2: {
    flex: "0 0 16.666667%",
    maxWidth: "16.666667%"
  },
  col_3: {
    flex: "0 0 25%",
    maxWidth: "25%"
  },
  col_4: {
    flex: "0 0 33.333333%",
    maxWidth: "33.333333%"
  },
  col_5: {
    flex: "0 0 41.666667%",
    maxWidth: "41.666667%"
  },
  col_6: {
    flex: "0 0 50%",
    maxWidth: "50%"
  },
  col_7: {
    flex: "0 0 58.333333%",
    maxWidth: "58.333333%"
  },
  col_8: {
    flex: "0 0 66.666667%",
    maxWidth: "66.666667%"
  },
  col_9: {
    flex: "0 0 75%",
    maxWidth: "66.666667%"
  },
  col_auto: {
    position: "relative",
    width: "100%"
  },
  col_lg: {
    position: "relative",
    width: "100%"
  },
  col_lg_1: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%"
    }
  },
  col_lg_10: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%"
    }
  },
  col_lg_11: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%"
    }
  },
  col_lg_12: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 100%",
      maxWidth: "100%"
    }
  },
  col_lg_2: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%"
    }
  },
  col_lg_3: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 25%",
      maxWidth: "25%"
    }
  },
  col_lg_4: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%"
    }
  },
  col_lg_5: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%"
    }
  },
  col_lg_6: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 50%",
      maxWidth: "50%"
    }
  },
  col_lg_7: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%"
    }
  },
  col_lg_8: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%"
    }
  },
  col_lg_9: {
    position: "relative",
    width: "100%",
    "@media (min-width: 992px)": {
      flex: "0 0 75%",
      maxWidth: "66.666667%"
    }
  },
  col_lg_auto: {
    position: "relative",
    width: "100%"
  },
  col_md: {
    position: "relative",
    width: "100%"
  },
  col_md_1: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%"
    }
  },
  col_md_10: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%"
    }
  },
  col_md_11: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%"
    }
  },
  col_md_12: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 100%",
      maxWidth: "100%"
    }
  },
  col_md_2: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%"
    }
  },
  col_md_3: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 25%",
      maxWidth: "25%"
    }
  },
  col_md_4: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%"
    }
  },
  col_md_5: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%"
    }
  },
  col_md_6: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 50%",
      maxWidth: "50%"
    }
  },
  col_md_7: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%"
    }
  },
  col_md_8: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%"
    }
  },
  col_md_9: {
    position: "relative",
    width: "100%",
    "@media (min-width: 768px)": {
      flex: "0 0 75%",
      maxWidth: "66.666667%"
    }
  },
  col_md_auto: {
    position: "relative",
    width: "100%"
  },
  col_sm: {
    position: "relative",
    width: "100%"
  },
  col_sm_1: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%"
    }
  },
  col_sm_10: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%"
    }
  },
  col_sm_11: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%"
    }
  },
  col_sm_12: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 100%",
      maxWidth: "100%"
    }
  },
  col_sm_2: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%"
    }
  },
  col_sm_3: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 25%",
      maxWidth: "25%"
    }
  },
  col_sm_4: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%"
    }
  },
  col_sm_5: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%"
    }
  },
  col_sm_6: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 50%",
      maxWidth: "50%"
    }
  },
  col_sm_7: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%"
    }
  },
  col_sm_8: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%"
    }
  },
  col_sm_9: {
    position: "relative",
    width: "100%",
    "@media (min-width: 576px)": {
      flex: "0 0 75%",
      maxWidth: "66.666667%"
    }
  },
  col_sm_auto: {
    position: "relative",
    width: "100%"
  },
  col_xl: {
    position: "relative",
    width: "100%"
  },
  col_xl_1: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 8.333333%",
      maxWidth: "8.333333%"
    }
  },
  col_xl_10: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 83.333333%",
      maxWidth: "83.333333%"
    }
  },
  col_xl_11: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 91.666667%",
      maxWidth: "91.666667%"
    }
  },
  col_xl_12: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 100%",
      maxWidth: "100%"
    }
  },
  col_xl_2: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 16.666667%",
      maxWidth: "16.666667%"
    }
  },
  col_xl_3: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 25%",
      maxWidth: "25%"
    }
  },
  col_xl_4: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 33.333333%",
      maxWidth: "33.333333%"
    }
  },
  col_xl_5: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 41.666667%",
      maxWidth: "41.666667%"
    }
  },
  col_xl_6: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 50%",
      maxWidth: "50%"
    }
  },
  col_xl_7: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 58.333333%",
      maxWidth: "58.333333%"
    }
  },
  col_xl_8: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 66.666667%",
      maxWidth: "66.666667%"
    }
  },
  col_xl_9: {
    position: "relative",
    width: "100%",
    "@media (min-width: 1200px)": {
      flex: "0 0 75%",
      maxWidth: "66.666667%"
    }
  },
  col_xl_auto: {
    position: "relative",
    width: "100%"
  },
  d_none: {
    display: "none"
  },
  d_inline: {
    display: "inline"
  },
  d_inline_block: {
    display: "inline-block"
  },
  d_block: {
    display: "block"
  },
  d_table: {
    display: "table"
  },
  d_table_cell: {
    display: "table-cell"
  },
  d_table_row: {
    display: "table-row"
  },
  d_flex: {
    display: "flex"
  },
  d_inline_flex: {
    display: "inline-flex"
  },
  __expression__: {
    "@media (min-width: 576px)": "(min-width: 576px)",
    "@media (min-width: 768px)": "(min-width: 768px)",
    "@media (min-width: 992px)": "(min-width: 992px)",
    "@media (min-width: 1200px)": "(min-width: 1200px)"
  },
  d_sm_none: {
    "@media (min-width: 576px)": {
      display: "none"
    }
  },
  d_sm_inline: {
    "@media (min-width: 576px)": {
      display: "inline"
    }
  },
  d_sm_inline_block: {
    "@media (min-width: 576px)": {
      display: "inline-block"
    }
  },
  d_sm_block: {
    "@media (min-width: 576px)": {
      display: "block"
    }
  },
  d_sm_table: {
    "@media (min-width: 576px)": {
      display: "table"
    }
  },
  d_sm_table_cell: {
    "@media (min-width: 576px)": {
      display: "table-cell"
    }
  },
  d_sm_table_row: {
    "@media (min-width: 576px)": {
      display: "table-row"
    }
  },
  d_sm_flex: {
    "@media (min-width: 576px)": {
      display: "flex"
    }
  },
  d_sm_inline_flex: {
    "@media (min-width: 576px)": {
      display: "inline-flex"
    }
  },
  d_md_none: {
    "@media (min-width: 768px)": {
      display: "none"
    }
  },
  d_md_inline: {
    "@media (min-width: 768px)": {
      display: "inline"
    }
  },
  d_md_inline_block: {
    "@media (min-width: 768px)": {
      display: "inline-block"
    }
  },
  d_md_block: {
    "@media (min-width: 768px)": {
      display: "block"
    }
  },
  d_md_table: {
    "@media (min-width: 768px)": {
      display: "table"
    }
  },
  d_md_table_cell: {
    "@media (min-width: 768px)": {
      display: "table-cell"
    }
  },
  d_md_table_row: {
    "@media (min-width: 768px)": {
      display: "table-row"
    }
  },
  d_md_flex: {
    "@media (min-width: 768px)": {
      display: "flex"
    }
  },
  d_md_inline_flex: {
    "@media (min-width: 768px)": {
      display: "inline-flex"
    }
  },
  d_lg_none: {
    "@media (min-width: 992px)": {
      display: "none"
    }
  },
  d_lg_inline: {
    "@media (min-width: 992px)": {
      display: "inline"
    }
  },
  d_lg_inline_block: {
    "@media (min-width: 992px)": {
      display: "inline-block"
    }
  },
  d_lg_block: {
    "@media (min-width: 992px)": {
      display: "block"
    }
  },
  d_lg_table: {
    "@media (min-width: 992px)": {
      display: "table"
    }
  },
  d_lg_table_cell: {
    "@media (min-width: 992px)": {
      display: "table-cell"
    }
  },
  d_lg_table_row: {
    "@media (min-width: 992px)": {
      display: "table-row"
    }
  },
  d_lg_flex: {
    "@media (min-width: 992px)": {
      display: "flex"
    }
  },
  d_lg_inline_flex: {
    "@media (min-width: 992px)": {
      display: "inline-flex"
    }
  },
  d_xl_none: {
    "@media (min-width: 1200px)": {
      display: "none"
    }
  },
  d_xl_inline: {
    "@media (min-width: 1200px)": {
      display: "inline"
    }
  },
  d_xl_inline_block: {
    "@media (min-width: 1200px)": {
      display: "inline-block"
    }
  },
  d_xl_block: {
    "@media (min-width: 1200px)": {
      display: "block"
    }
  },
  d_xl_table: {
    "@media (min-width: 1200px)": {
      display: "table"
    }
  },
  d_xl_table_cell: {
    "@media (min-width: 1200px)": {
      display: "table-cell"
    }
  },
  d_xl_table_row: {
    "@media (min-width: 1200px)": {
      display: "table-row"
    }
  },
  d_xl_flex: {
    "@media (min-width: 1200px)": {
      display: "flex"
    }
  },
  d_xl_inline_flex: {
    "@media (min-width: 1200px)": {
      display: "inline-flex"
    }
  }
});
