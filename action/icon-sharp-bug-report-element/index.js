import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBugReportElement
 * @class IconSharpBugReportElement
 * @extends {AoflElement}
 */
class IconSharpBugReportElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBugReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-bug-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBugReportElement.is, IconSharpBugReportElement);

export default IconSharpBugReportElement;
