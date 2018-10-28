import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVerticalAlignTopElement
 * @class IconSharpVerticalAlignTopElement
 * @extends {AoflElement}
 */
class IconSharpVerticalAlignTopElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVerticalAlignTopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-vertical-align-top';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVerticalAlignTopElement.is, IconSharpVerticalAlignTopElement);

export default IconSharpVerticalAlignTopElement;
