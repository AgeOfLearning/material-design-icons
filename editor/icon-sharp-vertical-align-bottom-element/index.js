import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVerticalAlignBottomElement
 * @class IconSharpVerticalAlignBottomElement
 * @extends {AoflElement}
 */
class IconSharpVerticalAlignBottomElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVerticalAlignBottomElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-vertical-align-bottom';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVerticalAlignBottomElement.is, IconSharpVerticalAlignBottomElement);

export default IconSharpVerticalAlignBottomElement;
