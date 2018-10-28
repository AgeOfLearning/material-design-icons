import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTextureElement
 * @class IconRoundTextureElement
 * @extends {AoflElement}
 */
class IconRoundTextureElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTextureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-texture';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTextureElement.is, IconRoundTextureElement);

export default IconRoundTextureElement;
