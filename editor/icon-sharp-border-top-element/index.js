import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderTopElement
 * @class IconSharpBorderTopElement
 * @extends {AoflElement}
 */
class IconSharpBorderTopElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderTopElement.is, IconSharpBorderTopElement);

export default IconSharpBorderTopElement;
