import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCameraEnhanceElement
 * @class IconSharpCameraEnhanceElement
 * @extends {AoflElement}
 */
class IconSharpCameraEnhanceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCameraEnhanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-camera-enhance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCameraEnhanceElement.is, IconSharpCameraEnhanceElement);

export default IconSharpCameraEnhanceElement;
