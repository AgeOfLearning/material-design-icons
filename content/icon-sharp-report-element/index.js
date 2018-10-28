import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpReportElement
 * @class IconSharpReportElement
 * @extends {AoflElement}
 */
class IconSharpReportElement extends AoflElement {
  /**
   * Creates an instance of IconSharpReportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-report';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpReportElement.is, IconSharpReportElement);

export default IconSharpReportElement;
