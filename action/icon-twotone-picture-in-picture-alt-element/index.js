import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePictureInPictureAltElement
 * @class IconTwotonePictureInPictureAltElement
 * @extends {AoflElement}
 */
class IconTwotonePictureInPictureAltElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePictureInPictureAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-picture-in-picture-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePictureInPictureAltElement.is, IconTwotonePictureInPictureAltElement);

export default IconTwotonePictureInPictureAltElement;
