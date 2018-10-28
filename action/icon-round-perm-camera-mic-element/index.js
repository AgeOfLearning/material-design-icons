import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPermCameraMicElement
 * @class IconRoundPermCameraMicElement
 * @extends {AoflElement}
 */
class IconRoundPermCameraMicElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPermCameraMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-perm-camera-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPermCameraMicElement.is, IconRoundPermCameraMicElement);

export default IconRoundPermCameraMicElement;
