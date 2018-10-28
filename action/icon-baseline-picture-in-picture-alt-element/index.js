import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePictureInPictureAltElement
 * @class IconBaselinePictureInPictureAltElement
 * @extends {AoflElement}
 */
class IconBaselinePictureInPictureAltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePictureInPictureAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-picture-in-picture-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePictureInPictureAltElement.is, IconBaselinePictureInPictureAltElement);

export default IconBaselinePictureInPictureAltElement;
