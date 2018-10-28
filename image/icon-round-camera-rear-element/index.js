import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCameraRearElement
 * @class IconRoundCameraRearElement
 * @extends {AoflElement}
 */
class IconRoundCameraRearElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCameraRearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-camera-rear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCameraRearElement.is, IconRoundCameraRearElement);

export default IconRoundCameraRearElement;
