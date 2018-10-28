import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderHorizontalElement
 * @class IconSharpBorderHorizontalElement
 * @extends {AoflElement}
 */
class IconSharpBorderHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderHorizontalElement.is, IconSharpBorderHorizontalElement);

export default IconSharpBorderHorizontalElement;
