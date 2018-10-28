import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCameraFrontElement
 * @class IconRoundCameraFrontElement
 * @extends {AoflElement}
 */
class IconRoundCameraFrontElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCameraFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-camera-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCameraFrontElement.is, IconRoundCameraFrontElement);

export default IconRoundCameraFrontElement;
