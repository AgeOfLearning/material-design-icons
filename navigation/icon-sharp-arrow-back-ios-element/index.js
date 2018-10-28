import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowBackIosElement
 * @class IconSharpArrowBackIosElement
 * @extends {AoflElement}
 */
class IconSharpArrowBackIosElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowBackIosElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-back-ios';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowBackIosElement.is, IconSharpArrowBackIosElement);

export default IconSharpArrowBackIosElement;
