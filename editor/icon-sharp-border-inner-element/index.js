import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderInnerElement
 * @class IconSharpBorderInnerElement
 * @extends {AoflElement}
 */
class IconSharpBorderInnerElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderInnerElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-inner';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderInnerElement.is, IconSharpBorderInnerElement);

export default IconSharpBorderInnerElement;
