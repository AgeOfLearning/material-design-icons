import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReportElement
 * @class IconTwotoneReportElement
 * @extends {AoflElement}
 */
class IconTwotoneReportElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReportElement.is, IconTwotoneReportElement);

export default IconTwotoneReportElement;
