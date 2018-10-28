import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReportOffElement
 * @class IconTwotoneReportOffElement
 * @extends {AoflElement}
 */
class IconTwotoneReportOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReportOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-report-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReportOffElement.is, IconTwotoneReportOffElement);

export default IconTwotoneReportOffElement;
