import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCameraAltElement
 * @class IconBaselineCameraAltElement
 * @extends {AoflElement}
 */
class IconBaselineCameraAltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCameraAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-camera-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCameraAltElement.is, IconBaselineCameraAltElement);

export default IconBaselineCameraAltElement;
