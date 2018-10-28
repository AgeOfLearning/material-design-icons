import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePresentToAllElement
 * @class IconBaselinePresentToAllElement
 * @extends {AoflElement}
 */
class IconBaselinePresentToAllElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePresentToAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-present-to-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePresentToAllElement.is, IconBaselinePresentToAllElement);

export default IconBaselinePresentToAllElement;
