import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLocalPhoneElement
 * @class IconRoundLocalPhoneElement
 * @extends {AoflElement}
 */
class IconRoundLocalPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLocalPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-local-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLocalPhoneElement.is, IconRoundLocalPhoneElement);

export default IconRoundLocalPhoneElement;
