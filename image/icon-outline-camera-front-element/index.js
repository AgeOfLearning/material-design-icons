import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCameraFrontElement
 * @class IconOutlineCameraFrontElement
 * @extends {AoflElement}
 */
class IconOutlineCameraFrontElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCameraFrontElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-camera-front';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCameraFrontElement.is, IconOutlineCameraFrontElement);

export default IconOutlineCameraFrontElement;
