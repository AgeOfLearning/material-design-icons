import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPrintElement
 * @class IconSharpPrintElement
 * @extends {AoflElement}
 */
class IconSharpPrintElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPrintElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-print';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPrintElement.is, IconSharpPrintElement);

export default IconSharpPrintElement;
