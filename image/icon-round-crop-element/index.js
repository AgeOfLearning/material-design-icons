import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCropElement
 * @class IconRoundCropElement
 * @extends {AoflElement}
 */
class IconRoundCropElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCropElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCropElement.is, IconRoundCropElement);

export default IconRoundCropElement;
