import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineExposurePlus2Element
 * @class IconBaselineExposurePlus2Element
 * @extends {AoflElement}
 */
class IconBaselineExposurePlus2Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineExposurePlus2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-exposure-plus-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineExposurePlus2Element.is, IconBaselineExposurePlus2Element);

export default IconBaselineExposurePlus2Element;
