import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCrop169Element
 * @class IconRoundCrop169Element
 * @extends {AoflElement}
 */
class IconRoundCrop169Element extends AoflElement {
  /**
   * Creates an instance of IconRoundCrop169Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-16-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCrop169Element.is, IconRoundCrop169Element);

export default IconRoundCrop169Element;
