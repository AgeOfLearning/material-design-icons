import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDesktopAccessDisabledElement
 * @class IconTwotoneDesktopAccessDisabledElement
 * @extends {AoflElement}
 */
class IconTwotoneDesktopAccessDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDesktopAccessDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-desktop-access-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDesktopAccessDisabledElement.is, IconTwotoneDesktopAccessDisabledElement);

export default IconTwotoneDesktopAccessDisabledElement;
