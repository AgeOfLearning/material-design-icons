import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewComfyElement
 * @class IconOutlineViewComfyElement
 * @extends {AoflElement}
 */
class IconOutlineViewComfyElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewComfyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-comfy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewComfyElement.is, IconOutlineViewComfyElement);

export default IconOutlineViewComfyElement;
