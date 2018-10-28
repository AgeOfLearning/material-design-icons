import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhonelinkElement
 * @class IconRoundPhonelinkElement
 * @extends {AoflElement}
 */
class IconRoundPhonelinkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhonelinkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phonelink';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhonelinkElement.is, IconRoundPhonelinkElement);

export default IconRoundPhonelinkElement;
