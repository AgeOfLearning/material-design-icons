import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDesktopMacElement
 * @class IconTwotoneDesktopMacElement
 * @extends {AoflElement}
 */
class IconTwotoneDesktopMacElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDesktopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-desktop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDesktopMacElement.is, IconTwotoneDesktopMacElement);

export default IconTwotoneDesktopMacElement;
