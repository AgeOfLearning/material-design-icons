import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCrop75Element
 * @class IconBaselineCrop75Element
 * @extends {AoflElement}
 */
class IconBaselineCrop75Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineCrop75Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-7-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCrop75Element.is, IconBaselineCrop75Element);

export default IconBaselineCrop75Element;
