import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPrintDisabledElement
 * @class IconSharpPrintDisabledElement
 * @extends {AoflElement}
 */
class IconSharpPrintDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPrintDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-print-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPrintDisabledElement.is, IconSharpPrintDisabledElement);

export default IconSharpPrintDisabledElement;
