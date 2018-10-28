import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCrop75Element
 * @class IconRoundCrop75Element
 * @extends {AoflElement}
 */
class IconRoundCrop75Element extends AoflElement {
  /**
   * Creates an instance of IconRoundCrop75Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-7-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCrop75Element.is, IconRoundCrop75Element);

export default IconRoundCrop75Element;
