import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCameraRearElement
 * @class IconSharpCameraRearElement
 * @extends {AoflElement}
 */
class IconSharpCameraRearElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCameraRearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-camera-rear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCameraRearElement.is, IconSharpCameraRearElement);

export default IconSharpCameraRearElement;
