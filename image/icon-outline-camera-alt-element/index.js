import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCameraAltElement
 * @class IconOutlineCameraAltElement
 * @extends {AoflElement}
 */
class IconOutlineCameraAltElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCameraAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-camera-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCameraAltElement.is, IconOutlineCameraAltElement);

export default IconOutlineCameraAltElement;
