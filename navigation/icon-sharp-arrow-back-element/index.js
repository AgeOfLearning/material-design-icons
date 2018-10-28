import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowBackElement
 * @class IconSharpArrowBackElement
 * @extends {AoflElement}
 */
class IconSharpArrowBackElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowBackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-back';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowBackElement.is, IconSharpArrowBackElement);

export default IconSharpArrowBackElement;
