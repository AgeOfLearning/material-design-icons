import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderRightElement
 * @class IconSharpBorderRightElement
 * @extends {AoflElement}
 */
class IconSharpBorderRightElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderRightElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-right';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderRightElement.is, IconSharpBorderRightElement);

export default IconSharpBorderRightElement;
