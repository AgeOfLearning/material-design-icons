import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePhotoFilterElement
 * @class IconTwotonePhotoFilterElement
 * @extends {AoflElement}
 */
class IconTwotonePhotoFilterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePhotoFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-photo-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePhotoFilterElement.is, IconTwotonePhotoFilterElement);

export default IconTwotonePhotoFilterElement;
