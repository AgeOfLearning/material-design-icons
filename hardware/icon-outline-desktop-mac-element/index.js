import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDesktopMacElement
 * @class IconOutlineDesktopMacElement
 * @extends {AoflElement}
 */
class IconOutlineDesktopMacElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDesktopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-desktop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDesktopMacElement.is, IconOutlineDesktopMacElement);

export default IconOutlineDesktopMacElement;
