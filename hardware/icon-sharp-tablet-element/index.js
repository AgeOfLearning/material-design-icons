import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTabletElement
 * @class IconSharpTabletElement
 * @extends {AoflElement}
 */
class IconSharpTabletElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTabletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tablet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTabletElement.is, IconSharpTabletElement);

export default IconSharpTabletElement;
