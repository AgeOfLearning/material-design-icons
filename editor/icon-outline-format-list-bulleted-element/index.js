import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineFormatListBulletedElement
 * @class IconOutlineFormatListBulletedElement
 * @extends {AoflElement}
 */
class IconOutlineFormatListBulletedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineFormatListBulletedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-format-list-bulleted';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineFormatListBulletedElement.is, IconOutlineFormatListBulletedElement);

export default IconOutlineFormatListBulletedElement;
