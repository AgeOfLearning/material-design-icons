import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundScreenLockPortraitElement
 * @class IconRoundScreenLockPortraitElement
 * @extends {AoflElement}
 */
class IconRoundScreenLockPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconRoundScreenLockPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-screen-lock-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundScreenLockPortraitElement.is, IconRoundScreenLockPortraitElement);

export default IconRoundScreenLockPortraitElement;
