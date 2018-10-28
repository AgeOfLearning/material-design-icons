import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDesktopMacElement
 * @class IconSharpDesktopMacElement
 * @extends {AoflElement}
 */
class IconSharpDesktopMacElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDesktopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-desktop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDesktopMacElement.is, IconSharpDesktopMacElement);

export default IconSharpDesktopMacElement;
