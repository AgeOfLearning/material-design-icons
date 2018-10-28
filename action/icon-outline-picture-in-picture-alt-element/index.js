import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePictureInPictureAltElement
 * @class IconOutlinePictureInPictureAltElement
 * @extends {AoflElement}
 */
class IconOutlinePictureInPictureAltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePictureInPictureAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-picture-in-picture-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePictureInPictureAltElement.is, IconOutlinePictureInPictureAltElement);

export default IconOutlinePictureInPictureAltElement;
