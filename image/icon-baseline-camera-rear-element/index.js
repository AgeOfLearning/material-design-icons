import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCameraRearElement
 * @class IconBaselineCameraRearElement
 * @extends {AoflElement}
 */
class IconBaselineCameraRearElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCameraRearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-camera-rear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCameraRearElement.is, IconBaselineCameraRearElement);

export default IconBaselineCameraRearElement;
