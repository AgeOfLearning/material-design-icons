import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCameraRollElement
 * @class IconRoundCameraRollElement
 * @extends {AoflElement}
 */
class IconRoundCameraRollElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCameraRollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-camera-roll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCameraRollElement.is, IconRoundCameraRollElement);

export default IconRoundCameraRollElement;
