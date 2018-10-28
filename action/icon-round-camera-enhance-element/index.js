import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCameraEnhanceElement
 * @class IconRoundCameraEnhanceElement
 * @extends {AoflElement}
 */
class IconRoundCameraEnhanceElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCameraEnhanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-camera-enhance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCameraEnhanceElement.is, IconRoundCameraEnhanceElement);

export default IconRoundCameraEnhanceElement;
