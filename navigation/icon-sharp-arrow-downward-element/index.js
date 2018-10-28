import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowDownwardElement
 * @class IconSharpArrowDownwardElement
 * @extends {AoflElement}
 */
class IconSharpArrowDownwardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowDownwardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-downward';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowDownwardElement.is, IconSharpArrowDownwardElement);

export default IconSharpArrowDownwardElement;
