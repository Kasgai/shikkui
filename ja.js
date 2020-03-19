var Msg = {
  categories: {
    html: "HTML",
    baseframe: "基本",
    textstructure: "テキスト構造",
    markup: "マークアップ",
    style: "スタイル",
    enumerations: "列挙",
    tables: "表",
    forms: "フォーム",
    scripts: "スクリプト",
    scripting: "scripting",
    logic: "論理",
    loops: "ループ",
    math: "計算",
    text: "文字",
    lists: "リスト",
    colour: "色",
    variables: "変数",
    functions: "関数"
  },
  blocks: {
    baseframe: {
      message0: "document %1 header %2 %3 content %4 %5"
    },
    html: {
      message0: "html %1 %2"
    },
    body: {
      message0: "body %1 %2"
    },
    head: {
      message0: "head %1 %2"
    },
    title: {
      message0: "title %1"
    },
    paragraph: {
      message0: "p %1"
    },
    plaintext: {
      message0: "text %1"
    },
    division: {
      message0: "div %1 %2"
    },
    style: {
      message0: "style =  %1 %2",
      tooltip: "",
      helpUrl: ""
    },
    color: {
      message0: "text colour :  %1",
      tooltip: "",
      helpUrl: ""
    },
    bgcolour: {
      message0: "background colour :  %1",
      helpUrl: ""
    },
    genericstyle: {
      message0: "%1 : %2",
      tooltip: "",
      helpUrl: "",
      args0: [{ text: "property" }, { text: "value" }]
    },
    generictag: {
      message0: "< %1 > %2 %3",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "tag"
        },
        {
          type: "input_value",
          name: "NAME",
          check: "attribute"
        },
        {
          type: "input_statement",
          name: "content",
          check: "html"
        }
      ]
    },
    more_attributes: {
      message0: "%1 %2 %3",
      tooltip: "",
      helpUrl: ""
    },
    genericattribute: {
      message0: "%1  =  %2",
      tooltip: "",
      helpUrl: "",
      args0: [{ text: "attribute" }, { text: "value" }]
    },
    link: {
      message0: "a href= %1 %2 %3",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
      args0: [
        {
          type: "field_input",
          name: "NAME",
          text: "target"
        },
        {
          type: "input_dummy"
        },
        {
          type: "input_statement",
          name: "content",
          check: "html"
        }
      ],
    },
    span: {
      message0: "span %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    image: {
      message0: "img %1 or %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
      args0: [
        {
          type: "field_input",
          name: "IMAGE",
          text: "URL"
        },
        {
          type: "field_input",
          name: "ALT",
          text: "alternative text"
        }
      ],
    },
    emphasise: {
      message0: "em %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    strong: {
      message0: "strong %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    headline: {
      message0: "%1 %2 %3",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp",
      args0: [
        {
          type: "field_dropdown",
          name: "NAME",
          options: [
            ["h1", "h1"],
            ["h2", "h2"],
            ["h3", "h3"],
            ["h4", "h4"],
            ["h5", "h5"],
            ["h6", "h6"]
          ]
        },
        {
          type: "input_dummy"
        },
        {
          type: "input_statement",
          name: "content"
        }
      ]
    },
    linebreak: {
      message0: "br",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    horizontalbreak: {
      message0: "hr",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    unorderedlist: {
      message0: "ul %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    orderedlist: {
      message0: "ol %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    listelement: {
      message0: "li %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    inserted: {
      message0: "ins %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    deleted: {
      message0: "del %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    super: {
      message0: "sup %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    sub: {
      message0: "sub %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    code: {
      message0: "code %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    quote: {
      message0: "q %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    blockquote: {
      message0: "blockquote %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    sample: {
      message0: "samp %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    keyboard: {
      message0: "kbd %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    variable: {
      message0: "var %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    form: {
      message0: "form %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    table: {
      message0: "table %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    tablerow: {
      message0: "tr %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    tablecell: {
      message0: "td %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    input_text: {
      message0: "input value = %1",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    button: {
      message0: "button %1 %2",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    },
    input: {
      message0: "%1 input %2 %3",
      tooltip: "",
      helpUrl: "http://www.w3schools.com/tags/tag_html.asp"
    }
  }
};
