import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneScreenLockPortraitElement
 * @class IconTwotoneScreenLockPortraitElement
 * @extends {AoflElement}
 */
class IconTwotoneScreenLockPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneScreenLockPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-screen-lock-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneScreenLockPortraitElement.is, IconTwotoneScreenLockPortraitElement);

export default IconTwotoneScreenLockPortraitElement;
