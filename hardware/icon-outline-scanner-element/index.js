import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineScannerElement
 * @class IconOutlineScannerElement
 * @extends {AoflElement}
 */
class IconOutlineScannerElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineScannerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-scanner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineScannerElement.is, IconOutlineScannerElement);

export default IconOutlineScannerElement;
