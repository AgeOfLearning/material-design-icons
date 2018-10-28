import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhonelinkLockElement
 * @class IconRoundPhonelinkLockElement
 * @extends {AoflElement}
 */
class IconRoundPhonelinkLockElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhonelinkLockElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phonelink-lock';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhonelinkLockElement.is, IconRoundPhonelinkLockElement);

export default IconRoundPhonelinkLockElement;
