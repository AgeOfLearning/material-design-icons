import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCrop32Element
 * @class IconRoundCrop32Element
 * @extends {AoflElement}
 */
class IconRoundCrop32Element extends AoflElement {
  /**
   * Creates an instance of IconRoundCrop32Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-3-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCrop32Element.is, IconRoundCrop32Element);

export default IconRoundCrop32Element;
