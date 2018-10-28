import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneScannerElement
 * @class IconTwotoneScannerElement
 * @extends {AoflElement}
 */
class IconTwotoneScannerElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneScannerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-scanner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneScannerElement.is, IconTwotoneScannerElement);

export default IconTwotoneScannerElement;
