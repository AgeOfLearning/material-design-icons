import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineReportElement
 * @class IconOutlineReportElement
 * @extends {AoflElement}
 */
class IconOutlineReportElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineReportElement.is, IconOutlineReportElement);

export default IconOutlineReportElement;
