import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpThumbsUpDownElement
 * @class IconSharpThumbsUpDownElement
 * @extends {AoflElement}
 */
class IconSharpThumbsUpDownElement extends AoflElement {
  /**
   * Creates an instance of IconSharpThumbsUpDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-thumbs-up-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpThumbsUpDownElement.is, IconSharpThumbsUpDownElement);

export default IconSharpThumbsUpDownElement;
