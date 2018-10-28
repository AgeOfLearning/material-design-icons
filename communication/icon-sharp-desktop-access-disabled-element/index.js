import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDesktopAccessDisabledElement
 * @class IconSharpDesktopAccessDisabledElement
 * @extends {AoflElement}
 */
class IconSharpDesktopAccessDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDesktopAccessDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-desktop-access-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDesktopAccessDisabledElement.is, IconSharpDesktopAccessDisabledElement);

export default IconSharpDesktopAccessDisabledElement;
