import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMarkunreadElement
 * @class IconSharpMarkunreadElement
 * @extends {AoflElement}
 */
class IconSharpMarkunreadElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMarkunreadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-markunread';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMarkunreadElement.is, IconSharpMarkunreadElement);

export default IconSharpMarkunreadElement;
