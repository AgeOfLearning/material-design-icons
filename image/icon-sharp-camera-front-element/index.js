import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCameraFrontElement
 * @class IconSharpCameraFrontElement
 * @extends {AoflElement}
 */
class IconSharpCameraFrontElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCameraFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-camera-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCameraFrontElement.is, IconSharpCameraFrontElement);

export default IconSharpCameraFrontElement;
