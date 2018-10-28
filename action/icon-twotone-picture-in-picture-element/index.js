import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePictureInPictureElement
 * @class IconTwotonePictureInPictureElement
 * @extends {AoflElement}
 */
class IconTwotonePictureInPictureElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePictureInPictureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-picture-in-picture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePictureInPictureElement.is, IconTwotonePictureInPictureElement);

export default IconTwotonePictureInPictureElement;
