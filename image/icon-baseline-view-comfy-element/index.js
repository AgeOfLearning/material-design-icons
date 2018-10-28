import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineViewComfyElement
 * @class IconBaselineViewComfyElement
 * @extends {AoflElement}
 */
class IconBaselineViewComfyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineViewComfyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-view-comfy';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineViewComfyElement.is, IconBaselineViewComfyElement);

export default IconBaselineViewComfyElement;
