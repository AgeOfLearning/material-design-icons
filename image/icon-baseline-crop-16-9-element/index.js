import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCrop169Element
 * @class IconBaselineCrop169Element
 * @extends {AoflElement}
 */
class IconBaselineCrop169Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineCrop169Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-16-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCrop169Element.is, IconBaselineCrop169Element);

export default IconBaselineCrop169Element;
