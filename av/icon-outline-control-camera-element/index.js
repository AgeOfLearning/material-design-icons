import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineControlCameraElement
 * @class IconOutlineControlCameraElement
 * @extends {AoflElement}
 */
class IconOutlineControlCameraElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineControlCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-control-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineControlCameraElement.is, IconOutlineControlCameraElement);

export default IconOutlineControlCameraElement;
