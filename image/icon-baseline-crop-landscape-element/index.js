import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCropLandscapeElement
 * @class IconBaselineCropLandscapeElement
 * @extends {AoflElement}
 */
class IconBaselineCropLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCropLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCropLandscapeElement.is, IconBaselineCropLandscapeElement);

export default IconBaselineCropLandscapeElement;
