import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFormatListBulletedElement
 * @class IconSharpFormatListBulletedElement
 * @extends {AoflElement}
 */
class IconSharpFormatListBulletedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFormatListBulletedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-format-list-bulleted';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFormatListBulletedElement.is, IconSharpFormatListBulletedElement);

export default IconSharpFormatListBulletedElement;
