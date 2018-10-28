import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCameraEnhanceElement
 * @class IconOutlineCameraEnhanceElement
 * @extends {AoflElement}
 */
class IconOutlineCameraEnhanceElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCameraEnhanceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-camera-enhance';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCameraEnhanceElement.is, IconOutlineCameraEnhanceElement);

export default IconOutlineCameraEnhanceElement;
