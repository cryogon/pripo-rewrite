export interface ParserOptions {
  /**
   * Class For Heading Tags
   * @default "parser-header"
   */
  headerClass?: string;
  /**
   * Class For Bold
   * @default "parser-bold"
   */
  boldClass?: string;
  /**
   * Class For Italic
   * @default "parser-italic"
   */
  italicClass?:string;
  /**
   * Class For paragraph tags
   * @default "parser-paragragh"
   */
  paragraphClass?:string;
  /**
   * Class For Links
   * @default "parser-links"
   */
  linkClass?: string;
  /**
   * Class For lists
   * @default "parser-lists"
   */
  listClass?: string;
  /**
   * Class For Images
   * @default "parser-images"
   */
  imgClass?: string;
};
export class Parser {

  private rules: (string | RegExp)[][];

  constructor(options?: ParserOptions) {
      const {
          boldClass = "parser-bold",
          italicClass="parser-italic",
          paragraphClass="parser-paragraph",
          headerClass = "parser-headers",
          imgClass = "parser-images",
          linkClass = "parser-links",
          listClass = "parser-lists"
      } = options || {};
      this.rules = [
          //header rules
          [/#{6}\s?([^\n]+)/g, `<h6 class="${headerClass}">$1</h6>`],
          [/#{5}\s?([^\n]+)/g, `<h5 class="${headerClass}">$1</h5>`],
          [/#{4}\s?([^\n]+)/g, `<h4 class="${headerClass}">$1</h4>`],
          [/#{3}\s?([^\n]+)/g, `<h3 class="${headerClass}">$1</h3>`],
          [/#{2}\s?([^\n]+)/g, `<h2 class="${headerClass}">$1</h2>`],
          [/#{1}\s?([^\n]+)/g, `<h1 class="${headerClass}">$1</h1>`],

          //bold, italics and paragragh rules
          [/\*\*\s?([^\n]+)\*\*/g, `<b class="${boldClass}">$1</b>`],
          [/\*\s?([^\n]+)\*/g, `<i class="${italicClass}">$1</i>`],
          [/__([^_]+)__/g, `<b class="${boldClass}">$1</b>`],
          [/_([^_`]+)_/g, `<i class="${italicClass}">$1</i>`],
          [/([^\n]+\n?)/g, `<p class="${paragraphClass}">$1</p>`],

          //links
          [
              /\[([^\]]+)\]\(([^)]+)\)/g,
              `<a href="$2" class="${linkClass}">$1</a>`,
          ],

          //highlights
          [
              /(`)(\s?[^\n,]+\s?)(`)/g,
              `<a class="${linkClass}">$2</a>`,
          ],

          //Lists
          [/([^\n]+)(\+)([^\n]+)/g, `<ul class="${listClass}"><li>$3</li></ul>`],
          [/([^\n]+)(\*)([^\n]+)/g, `<ul class="${listClass}"><li>$3</li></ul>`],

          //Image
          [
              /!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g,
              `<img src="$2" alt="$1" title="$3" class="${imgClass}"/>`,
          ],
      ]
  }
  render(html: string) {
      this.rules.forEach(([rule, template]) => {
          html = html.replace(rule as RegExp, template as string);
      })
      return html;
  }
}