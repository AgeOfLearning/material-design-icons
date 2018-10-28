import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLinearScaleElement
 * @class IconTwotoneLinearScaleElement
 * @extends {AoflElement}
 */
class IconTwotoneLinearScaleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLinearScaleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-linear-scale';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLinearScaleElement.is, IconTwotoneLinearScaleElement);

export default IconTwotoneLinearScaleElement;
