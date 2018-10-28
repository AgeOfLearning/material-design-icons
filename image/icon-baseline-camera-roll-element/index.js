import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCameraRollElement
 * @class IconBaselineCameraRollElement
 * @extends {AoflElement}
 */
class IconBaselineCameraRollElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCameraRollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-camera-roll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCameraRollElement.is, IconBaselineCameraRollElement);

export default IconBaselineCameraRollElement;
