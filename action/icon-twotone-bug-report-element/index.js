import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBugReportElement
 * @class IconTwotoneBugReportElement
 * @extends {AoflElement}
 */
class IconTwotoneBugReportElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBugReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-bug-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBugReportElement.is, IconTwotoneBugReportElement);

export default IconTwotoneBugReportElement;
