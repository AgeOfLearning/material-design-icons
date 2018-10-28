import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpDehazeElement
 * @class IconSharpDehazeElement
 * @extends {AoflElement}
 */
class IconSharpDehazeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpDehazeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-dehaze';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpDehazeElement.is, IconSharpDehazeElement);

export default IconSharpDehazeElement;
