import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArrowDropUpElement
 * @class IconSharpArrowDropUpElement
 * @extends {AoflElement}
 */
class IconSharpArrowDropUpElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArrowDropUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-arrow-drop-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArrowDropUpElement.is, IconSharpArrowDropUpElement);

export default IconSharpArrowDropUpElement;
