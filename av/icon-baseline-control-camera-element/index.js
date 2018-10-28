import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineControlCameraElement
 * @class IconBaselineControlCameraElement
 * @extends {AoflElement}
 */
class IconBaselineControlCameraElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineControlCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-control-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineControlCameraElement.is, IconBaselineControlCameraElement);

export default IconBaselineControlCameraElement;
