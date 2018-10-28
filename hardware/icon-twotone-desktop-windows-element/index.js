import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDesktopWindowsElement
 * @class IconTwotoneDesktopWindowsElement
 * @extends {AoflElement}
 */
class IconTwotoneDesktopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDesktopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-desktop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDesktopWindowsElement.is, IconTwotoneDesktopWindowsElement);

export default IconTwotoneDesktopWindowsElement;
