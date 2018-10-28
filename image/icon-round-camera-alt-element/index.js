import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCameraAltElement
 * @class IconRoundCameraAltElement
 * @extends {AoflElement}
 */
class IconRoundCameraAltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCameraAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-camera-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCameraAltElement.is, IconRoundCameraAltElement);

export default IconRoundCameraAltElement;
