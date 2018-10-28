import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineScreenLockLandscapeElement
 * @class IconOutlineScreenLockLandscapeElement
 * @extends {AoflElement}
 */
class IconOutlineScreenLockLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineScreenLockLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-screen-lock-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineScreenLockLandscapeElement.is, IconOutlineScreenLockLandscapeElement);

export default IconOutlineScreenLockLandscapeElement;
