import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePictureInPictureElement
 * @class IconOutlinePictureInPictureElement
 * @extends {AoflElement}
 */
class IconOutlinePictureInPictureElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePictureInPictureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-picture-in-picture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePictureInPictureElement.is, IconOutlinePictureInPictureElement);

export default IconOutlinePictureInPictureElement;
