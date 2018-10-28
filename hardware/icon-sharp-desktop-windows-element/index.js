import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDesktopWindowsElement
 * @class IconSharpDesktopWindowsElement
 * @extends {AoflElement}
 */
class IconSharpDesktopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDesktopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-desktop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDesktopWindowsElement.is, IconSharpDesktopWindowsElement);

export default IconSharpDesktopWindowsElement;
