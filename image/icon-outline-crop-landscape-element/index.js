import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCropLandscapeElement
 * @class IconOutlineCropLandscapeElement
 * @extends {AoflElement}
 */
class IconOutlineCropLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCropLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-crop-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCropLandscapeElement.is, IconOutlineCropLandscapeElement);

export default IconOutlineCropLandscapeElement;
