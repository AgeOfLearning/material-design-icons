import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPermCameraMicElement
 * @class IconSharpPermCameraMicElement
 * @extends {AoflElement}
 */
class IconSharpPermCameraMicElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPermCameraMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-perm-camera-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPermCameraMicElement.is, IconSharpPermCameraMicElement);

export default IconSharpPermCameraMicElement;
