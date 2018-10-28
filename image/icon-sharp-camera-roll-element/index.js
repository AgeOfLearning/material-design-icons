import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCameraRollElement
 * @class IconSharpCameraRollElement
 * @extends {AoflElement}
 */
class IconSharpCameraRollElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCameraRollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-camera-roll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCameraRollElement.is, IconSharpCameraRollElement);

export default IconSharpCameraRollElement;
