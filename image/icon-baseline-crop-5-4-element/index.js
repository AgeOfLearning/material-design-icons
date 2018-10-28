import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCrop54Element
 * @class IconBaselineCrop54Element
 * @extends {AoflElement}
 */
class IconBaselineCrop54Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineCrop54Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-crop-5-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCrop54Element.is, IconBaselineCrop54Element);

export default IconBaselineCrop54Element;
