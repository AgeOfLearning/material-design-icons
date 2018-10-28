import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDesktopWindowsElement
 * @class IconBaselineDesktopWindowsElement
 * @extends {AoflElement}
 */
class IconBaselineDesktopWindowsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDesktopWindowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-desktop-windows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDesktopWindowsElement.is, IconBaselineDesktopWindowsElement);

export default IconBaselineDesktopWindowsElement;
