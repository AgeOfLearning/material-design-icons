import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCameraAltElement
 * @class IconSharpCameraAltElement
 * @extends {AoflElement}
 */
class IconSharpCameraAltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCameraAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-camera-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCameraAltElement.is, IconSharpCameraAltElement);

export default IconSharpCameraAltElement;
