import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewComfyElement
 * @class IconRoundViewComfyElement
 * @extends {AoflElement}
 */
class IconRoundViewComfyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewComfyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-comfy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewComfyElement.is, IconRoundViewComfyElement);

export default IconRoundViewComfyElement;
