import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAddPhotoAlternateElement
 * @class IconBaselineAddPhotoAlternateElement
 * @extends {AoflElement}
 */
class IconBaselineAddPhotoAlternateElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAddPhotoAlternateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-add-photo-alternate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAddPhotoAlternateElement.is, IconBaselineAddPhotoAlternateElement);

export default IconBaselineAddPhotoAlternateElement;
