import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpViewComfyElement
 * @class IconSharpViewComfyElement
 * @extends {AoflElement}
 */
class IconSharpViewComfyElement extends AoflElement {
  /**
   * Creates an instance of IconSharpViewComfyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-view-comfy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpViewComfyElement.is, IconSharpViewComfyElement);

export default IconSharpViewComfyElement;
