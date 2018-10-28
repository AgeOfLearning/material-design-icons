import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCropRotateElement
 * @class IconRoundCropRotateElement
 * @extends {AoflElement}
 */
class IconRoundCropRotateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCropRotateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-rotate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCropRotateElement.is, IconRoundCropRotateElement);

export default IconRoundCropRotateElement;
