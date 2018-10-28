import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePictureInPictureElement
 * @class IconBaselinePictureInPictureElement
 * @extends {AoflElement}
 */
class IconBaselinePictureInPictureElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePictureInPictureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-picture-in-picture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePictureInPictureElement.is, IconBaselinePictureInPictureElement);

export default IconBaselinePictureInPictureElement;
