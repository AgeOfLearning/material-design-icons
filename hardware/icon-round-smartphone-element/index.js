import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSmartphoneElement
 * @class IconRoundSmartphoneElement
 * @extends {AoflElement}
 */
class IconRoundSmartphoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSmartphoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-smartphone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSmartphoneElement.is, IconRoundSmartphoneElement);

export default IconRoundSmartphoneElement;
