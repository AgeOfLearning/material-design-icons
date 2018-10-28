import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCameraElement
 * @class IconRoundCameraElement
 * @extends {AoflElement}
 */
class IconRoundCameraElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCameraElement.is, IconRoundCameraElement);

export default IconRoundCameraElement;
