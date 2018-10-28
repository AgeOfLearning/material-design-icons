import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCameraRearElement
 * @class IconOutlineCameraRearElement
 * @extends {AoflElement}
 */
class IconOutlineCameraRearElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCameraRearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-camera-rear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCameraRearElement.is, IconOutlineCameraRearElement);

export default IconOutlineCameraRearElement;
