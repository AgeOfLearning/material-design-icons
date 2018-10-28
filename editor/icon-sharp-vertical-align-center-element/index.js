import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVerticalAlignCenterElement
 * @class IconSharpVerticalAlignCenterElement
 * @extends {AoflElement}
 */
class IconSharpVerticalAlignCenterElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVerticalAlignCenterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-vertical-align-center';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVerticalAlignCenterElement.is, IconSharpVerticalAlignCenterElement);

export default IconSharpVerticalAlignCenterElement;
