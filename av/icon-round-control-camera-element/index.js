import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundControlCameraElement
 * @class IconRoundControlCameraElement
 * @extends {AoflElement}
 */
class IconRoundControlCameraElement extends AoflElement {
  /**
   * Creates an instance of IconRoundControlCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-control-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundControlCameraElement.is, IconRoundControlCameraElement);

export default IconRoundControlCameraElement;
