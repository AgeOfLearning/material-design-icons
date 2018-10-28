import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNfcElement
 * @class IconBaselineNfcElement
 * @extends {AoflElement}
 */
class IconBaselineNfcElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNfcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-nfc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNfcElement.is, IconBaselineNfcElement);

export default IconBaselineNfcElement;
