import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReportOffElement
 * @class IconSharpReportOffElement
 * @extends {AoflElement}
 */
class IconSharpReportOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpReportOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-report-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReportOffElement.is, IconSharpReportOffElement);

export default IconSharpReportOffElement;
