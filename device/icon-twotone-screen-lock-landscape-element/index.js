import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneScreenLockLandscapeElement
 * @class IconTwotoneScreenLockLandscapeElement
 * @extends {AoflElement}
 */
class IconTwotoneScreenLockLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneScreenLockLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-screen-lock-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneScreenLockLandscapeElement.is, IconTwotoneScreenLockLandscapeElement);

export default IconTwotoneScreenLockLandscapeElement;
