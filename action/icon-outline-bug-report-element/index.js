import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBugReportElement
 * @class IconOutlineBugReportElement
 * @extends {AoflElement}
 */
class IconOutlineBugReportElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBugReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-bug-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBugReportElement.is, IconOutlineBugReportElement);

export default IconOutlineBugReportElement;
