import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpScreenLockPortraitElement
 * @class IconSharpScreenLockPortraitElement
 * @extends {AoflElement}
 */
class IconSharpScreenLockPortraitElement extends AoflElement {
  /**
   * Creates an instance of IconSharpScreenLockPortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-screen-lock-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpScreenLockPortraitElement.is, IconSharpScreenLockPortraitElement);

export default IconSharpScreenLockPortraitElement;
