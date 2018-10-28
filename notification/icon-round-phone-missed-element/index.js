import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhoneMissedElement
 * @class IconRoundPhoneMissedElement
 * @extends {AoflElement}
 */
class IconRoundPhoneMissedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhoneMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phone-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhoneMissedElement.is, IconRoundPhoneMissedElement);

export default IconRoundPhoneMissedElement;
