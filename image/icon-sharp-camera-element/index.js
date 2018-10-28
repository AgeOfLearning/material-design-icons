import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCameraElement
 * @class IconSharpCameraElement
 * @extends {AoflElement}
 */
class IconSharpCameraElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCameraElement.is, IconSharpCameraElement);

export default IconSharpCameraElement;
