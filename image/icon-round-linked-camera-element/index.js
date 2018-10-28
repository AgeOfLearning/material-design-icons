import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLinkedCameraElement
 * @class IconRoundLinkedCameraElement
 * @extends {AoflElement}
 */
class IconRoundLinkedCameraElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLinkedCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-linked-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLinkedCameraElement.is, IconRoundLinkedCameraElement);

export default IconRoundLinkedCameraElement;
