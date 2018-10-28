import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAddPhotoAlternateElement
 * @class IconRoundAddPhotoAlternateElement
 * @extends {AoflElement}
 */
class IconRoundAddPhotoAlternateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAddPhotoAlternateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-add-photo-alternate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAddPhotoAlternateElement.is, IconRoundAddPhotoAlternateElement);

export default IconRoundAddPhotoAlternateElement;
