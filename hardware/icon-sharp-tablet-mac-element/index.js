import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTabletMacElement
 * @class IconSharpTabletMacElement
 * @extends {AoflElement}
 */
class IconSharpTabletMacElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTabletMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tablet-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTabletMacElement.is, IconSharpTabletMacElement);

export default IconSharpTabletMacElement;
