import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpScannerElement
 * @class IconSharpScannerElement
 * @extends {AoflElement}
 */
class IconSharpScannerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpScannerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-scanner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpScannerElement.is, IconSharpScannerElement);

export default IconSharpScannerElement;
