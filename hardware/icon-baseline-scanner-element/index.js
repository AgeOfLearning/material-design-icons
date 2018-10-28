import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineScannerElement
 * @class IconBaselineScannerElement
 * @extends {AoflElement}
 */
class IconBaselineScannerElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineScannerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-scanner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineScannerElement.is, IconBaselineScannerElement);

export default IconBaselineScannerElement;
