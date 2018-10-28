import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhonelinkEraseElement
 * @class IconRoundPhonelinkEraseElement
 * @extends {AoflElement}
 */
class IconRoundPhonelinkEraseElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhonelinkEraseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phonelink-erase';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhonelinkEraseElement.is, IconRoundPhonelinkEraseElement);

export default IconRoundPhonelinkEraseElement;
