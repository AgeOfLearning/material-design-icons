import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNfcElement
 * @class IconRoundNfcElement
 * @extends {AoflElement}
 */
class IconRoundNfcElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNfcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-nfc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNfcElement.is, IconRoundNfcElement);

export default IconRoundNfcElement;
