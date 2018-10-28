import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineScreenLockPortraitElement
 * @class IconOutlineScreenLockPortraitElement
 * @extends {AoflElement}
 */
class IconOutlineScreenLockPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineScreenLockPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-screen-lock-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineScreenLockPortraitElement.is, IconOutlineScreenLockPortraitElement);

export default IconOutlineScreenLockPortraitElement;
