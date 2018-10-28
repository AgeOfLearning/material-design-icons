import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhoneElement
 * @class IconRoundPhoneElement
 * @extends {AoflElement}
 */
class IconRoundPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhoneElement.is, IconRoundPhoneElement);

export default IconRoundPhoneElement;
