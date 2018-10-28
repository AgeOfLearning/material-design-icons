import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhotoElement
 * @class IconTwotonePhotoElement
 * @extends {AoflElement}
 */
class IconTwotonePhotoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhotoElement.is, IconTwotonePhotoElement);

export default IconTwotonePhotoElement;
