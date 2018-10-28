import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMenuElement
 * @class IconTwotoneMenuElement
 * @extends {AoflElement}
 */
class IconTwotoneMenuElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMenuElement.is, IconTwotoneMenuElement);

export default IconTwotoneMenuElement;
