import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExposurePlus1Element
 * @class IconBaselineExposurePlus1Element
 * @extends {AoflElement}
 */
class IconBaselineExposurePlus1Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineExposurePlus1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-exposure-plus-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExposurePlus1Element.is, IconBaselineExposurePlus1Element);

export default IconBaselineExposurePlus1Element;
