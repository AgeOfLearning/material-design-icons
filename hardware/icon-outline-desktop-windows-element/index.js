import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDesktopWindowsElement
 * @class IconOutlineDesktopWindowsElement
 * @extends {AoflElement}
 */
class IconOutlineDesktopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDesktopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-desktop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDesktopWindowsElement.is, IconOutlineDesktopWindowsElement);

export default IconOutlineDesktopWindowsElement;
