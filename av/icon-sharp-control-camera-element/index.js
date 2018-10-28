import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpControlCameraElement
 * @class IconSharpControlCameraElement
 * @extends {AoflElement}
 */
class IconSharpControlCameraElement extends AoflElement {
  /**
   * Creates an instance of IconSharpControlCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-control-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpControlCameraElement.is, IconSharpControlCameraElement);

export default IconSharpControlCameraElement;
