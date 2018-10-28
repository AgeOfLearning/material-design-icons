import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowForwardElement
 * @class IconSharpArrowForwardElement
 * @extends {AoflElement}
 */
class IconSharpArrowForwardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowForwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-forward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowForwardElement.is, IconSharpArrowForwardElement);

export default IconSharpArrowForwardElement;
