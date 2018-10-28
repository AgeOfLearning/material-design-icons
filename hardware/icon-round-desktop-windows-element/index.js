import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDesktopWindowsElement
 * @class IconRoundDesktopWindowsElement
 * @extends {AoflElement}
 */
class IconRoundDesktopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDesktopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-desktop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDesktopWindowsElement.is, IconRoundDesktopWindowsElement);

export default IconRoundDesktopWindowsElement;
