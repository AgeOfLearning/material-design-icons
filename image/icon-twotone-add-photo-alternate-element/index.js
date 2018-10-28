import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAddPhotoAlternateElement
 * @class IconTwotoneAddPhotoAlternateElement
 * @extends {AoflElement}
 */
class IconTwotoneAddPhotoAlternateElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAddPhotoAlternateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-add-photo-alternate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAddPhotoAlternateElement.is, IconTwotoneAddPhotoAlternateElement);

export default IconTwotoneAddPhotoAlternateElement;
