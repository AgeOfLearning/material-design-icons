import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCrop54Element
 * @class IconRoundCrop54Element
 * @extends {AoflElement}
 */
class IconRoundCrop54Element extends AoflElement {
  /**
   * Creates an instance of IconRoundCrop54Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-crop-5-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCrop54Element.is, IconRoundCrop54Element);

export default IconRoundCrop54Element;
