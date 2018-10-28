import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneViewComfyElement
 * @class IconTwotoneViewComfyElement
 * @extends {AoflElement}
 */
class IconTwotoneViewComfyElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneViewComfyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-view-comfy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneViewComfyElement.is, IconTwotoneViewComfyElement);

export default IconTwotoneViewComfyElement;
