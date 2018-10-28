import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTextureElement
 * @class IconBaselineTextureElement
 * @extends {AoflElement}
 */
class IconBaselineTextureElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTextureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-texture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTextureElement.is, IconBaselineTextureElement);

export default IconBaselineTextureElement;
