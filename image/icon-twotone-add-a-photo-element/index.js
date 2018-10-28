import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddAPhotoElement
 * @class IconTwotoneAddAPhotoElement
 * @extends {AoflElement}
 */
class IconTwotoneAddAPhotoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddAPhotoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-a-photo';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddAPhotoElement.is, IconTwotoneAddAPhotoElement);

export default IconTwotoneAddAPhotoElement;
