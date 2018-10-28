import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpThumbUpElement
 * @class IconSharpThumbUpElement
 * @extends {AoflElement}
 */
class IconSharpThumbUpElement extends AoflElement {
  /**
   * Creates an instance of IconSharpThumbUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-thumb-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpThumbUpElement.is, IconSharpThumbUpElement);

export default IconSharpThumbUpElement;
