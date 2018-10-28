import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpThumbUpAltElement
 * @class IconSharpThumbUpAltElement
 * @extends {AoflElement}
 */
class IconSharpThumbUpAltElement extends AoflElement {
  /**
   * Creates an instance of IconSharpThumbUpAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-thumb-up-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpThumbUpAltElement.is, IconSharpThumbUpAltElement);

export default IconSharpThumbUpAltElement;
