import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCropLandscapeElement
 * @class IconTwotoneCropLandscapeElement
 * @extends {AoflElement}
 */
class IconTwotoneCropLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCropLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-crop-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCropLandscapeElement.is, IconTwotoneCropLandscapeElement);

export default IconTwotoneCropLandscapeElement;
