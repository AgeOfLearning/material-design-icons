import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFormatListBulletedElement
 * @class IconTwotoneFormatListBulletedElement
 * @extends {AoflElement}
 */
class IconTwotoneFormatListBulletedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFormatListBulletedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-format-list-bulleted';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFormatListBulletedElement.is, IconTwotoneFormatListBulletedElement);

export default IconTwotoneFormatListBulletedElement;
