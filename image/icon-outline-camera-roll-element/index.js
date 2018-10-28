import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCameraRollElement
 * @class IconOutlineCameraRollElement
 * @extends {AoflElement}
 */
class IconOutlineCameraRollElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCameraRollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-camera-roll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCameraRollElement.is, IconOutlineCameraRollElement);

export default IconOutlineCameraRollElement;
