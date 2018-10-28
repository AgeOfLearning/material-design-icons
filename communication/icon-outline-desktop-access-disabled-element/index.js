import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDesktopAccessDisabledElement
 * @class IconOutlineDesktopAccessDisabledElement
 * @extends {AoflElement}
 */
class IconOutlineDesktopAccessDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDesktopAccessDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-desktop-access-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDesktopAccessDisabledElement.is, IconOutlineDesktopAccessDisabledElement);

export default IconOutlineDesktopAccessDisabledElement;
