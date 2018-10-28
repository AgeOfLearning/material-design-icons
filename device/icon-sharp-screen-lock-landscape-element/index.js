import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpScreenLockLandscapeElement
 * @class IconSharpScreenLockLandscapeElement
 * @extends {AoflElement}
 */
class IconSharpScreenLockLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpScreenLockLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-screen-lock-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpScreenLockLandscapeElement.is, IconSharpScreenLockLandscapeElement);

export default IconSharpScreenLockLandscapeElement;
