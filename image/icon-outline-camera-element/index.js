import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCameraElement
 * @class IconOutlineCameraElement
 * @extends {AoflElement}
 */
class IconOutlineCameraElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCameraElement.is, IconOutlineCameraElement);

export default IconOutlineCameraElement;
