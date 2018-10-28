import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderVerticalElement
 * @class IconSharpBorderVerticalElement
 * @extends {AoflElement}
 */
class IconSharpBorderVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderVerticalElement.is, IconSharpBorderVerticalElement);

export default IconSharpBorderVerticalElement;
