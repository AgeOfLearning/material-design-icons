import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReportOffElement
 * @class IconOutlineReportOffElement
 * @extends {AoflElement}
 */
class IconOutlineReportOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineReportOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-report-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReportOffElement.is, IconOutlineReportOffElement);

export default IconOutlineReportOffElement;
