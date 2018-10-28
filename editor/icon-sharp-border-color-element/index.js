import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBorderColorElement
 * @class IconSharpBorderColorElement
 * @extends {AoflElement}
 */
class IconSharpBorderColorElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBorderColorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-border-color';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBorderColorElement.is, IconSharpBorderColorElement);

export default IconSharpBorderColorElement;
