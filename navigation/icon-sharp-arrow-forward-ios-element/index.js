import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowForwardIosElement
 * @class IconSharpArrowForwardIosElement
 * @extends {AoflElement}
 */
class IconSharpArrowForwardIosElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowForwardIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-forward-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowForwardIosElement.is, IconSharpArrowForwardIosElement);

export default IconSharpArrowForwardIosElement;
