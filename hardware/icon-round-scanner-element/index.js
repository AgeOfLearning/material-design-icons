import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundScannerElement
 * @class IconRoundScannerElement
 * @extends {AoflElement}
 */
class IconRoundScannerElement extends AoflElement {
  /**
   * Creates an instance of IconRoundScannerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-scanner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundScannerElement.is, IconRoundScannerElement);

export default IconRoundScannerElement;
